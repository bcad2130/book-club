import React from 'react'
import {Panel, P, Em, Close, CloseWrapper, BG} from './styles'
import Book from '../Book'

const DetailPanel = ({book, closePanel, state}) => {
  console.log(state)
  return (
    <>
      <BG onClick={closePanel} $state={state} />
      <Panel $state={state}>
        <CloseWrapper onClick={closePanel} $state={state}>
          <Close />
        </CloseWrapper>

        {book && (
          <>
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

// TODO FIX : WHY IS THE X BUTTON ALWAYS SHOWING UP?

export default DetailPanel