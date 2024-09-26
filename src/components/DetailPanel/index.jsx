import React from 'react'
import {Panel, P, Em, CloseWrapper, BG} from './styles'
import {Close, Button} from '../../styles'
import Book from '../Book'

const DetailPanel = ({book, closePanel, state, toggleFave}) => {

  return (
    <>
      <BG onClick={closePanel} $state={state} />
      <Panel $state={state}>
        <CloseWrapper onClick={closePanel} $state={state}>
          <Close />
        </CloseWrapper>

        {book && (
          <>
            <Button onClick={() => toggleFave(book.id)} $hasEmoji={true} >
              {book.isFaved ? '💔 Unfave book' : '❤️ Fave book'}
            </Button>
            <Book book={book} isLarge={true}/>
            <P>{book.description}</P>
            <P>
              <Em>Published in {book.published}</Em>
            </P>
          </>
        )}
      </Panel>
    </>
  )
}

export default DetailPanel