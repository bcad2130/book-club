import React, {useState, useEffect} from 'react'
import BooksContainer from './components/BooksContainer'
import Header from './components/Header'
import DetailPanel from './components/DetailPanel'
import Search from './components/Search'
import {GlobalStyle} from './styles'
import {Transition} from 'react-transition-group'

const App = () => {
  const [books, setBooks] = useState([])
  const [showPanel, setShowPanel] = useState(false)
  const [showFaves, setShowFaves] = useState(false)

  const faveBookIds = localStorage.getItem('faveBookIds') ? JSON.parse(localStorage.getItem('faveBookIds')) : []

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://book-club-json.herokuapp.com/books')
        const books = await response.json()

        setBooks(books.map((book) => ({
          ...book,
          isFaved: faveBookIds.includes(book.id)
        })))

      } catch (errors) {
        console.log(errors)
      }
    }

    fetchData()
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  const pickBook = (bookId) => {
    setBooks(books.map(book => (
      {...book, isPicked: book.id === bookId}
    )))
    setShowPanel(true)
  }

  const closePanel = () => {
    setShowPanel(false)
  }

  const filterBooks = (searchTerm) => {
    const stringSearch = (bookAttribute, searchTerm) =>
      bookAttribute.toLowerCase().includes(searchTerm.toLowerCase())

    setBooks(books.map((book) => {
        const isFiltered = !searchTerm
          ? false
          : stringSearch(book.title, searchTerm) || stringSearch(book.author, searchTerm)
          ? false
          : true

        return {...book, isFiltered: isFiltered}
      })
    )
  }

  const hasFiltered = books.some((book) => (book.isFiltered === true))

  const displayBooks = hasFiltered 
                    ?  books.filter((book) => !book.isFiltered)
                    :  showFaves
                    ?  books.filter((book) => book.isFaved)
                    :  books

  const toggleFave = (bookId) => {

    setBooks((books) => {

      const updatedBooks = books.map((book) => (
        book.id === bookId ? {...book, isFaved: !book.isFaved} : book
      ))

      localStorage.setItem('faveBookIds', JSON.stringify(
        updatedBooks
          .filter(({isFaved}) => isFaved)
          .map(({id}) => id)
      ))

      return updatedBooks
    })
  }

  const toggleShowFaves = () => (
    setShowFaves(!showFaves)
  )

  const selectedBook = books.find(book => book.isPicked)

  return (
    <>
      <GlobalStyle />
      <Header>
        <Search filterBooks={filterBooks} showFaves={showFaves} toggleShowFaves={toggleShowFaves} faveBookIds={faveBookIds.length} />
      </Header>
      <BooksContainer books={displayBooks} pickBook={pickBook} isPanelOpen={showPanel} title={hasFiltered ? 'Search results' : showFaves ? 'Favorite books' : 'All books'} />
      <Transition in={showPanel} timeout={300} >
        {(state) => (
          <DetailPanel book={selectedBook} closePanel={closePanel} state={state} toggleFave={toggleFave}/>
        )}

      </Transition>
    </>
  )
}

export default App;
