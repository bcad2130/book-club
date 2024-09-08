import React, {useState, useEffect} from 'react'

const App = () => {
  const [books, setBooks] = useState([])

  console.log('this message will load whenever the component renders')

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://boooooo  ok-club-json.herokuapp.com/books')
        console.log('heres what our fetch request  returns: ', response)

          const books = await response.json() 
          console.log('our json-ified response: ', books) 
          setBooks(books) 
      } catch (errors) {
        console.log(errors)
      }

    }

    fetchData()
  }, [])

  console.log('the books array in our state: ', books)

  return <div>hello world</div>
}

export default App;
