import React, {useRef, useState} from 'react'
import {SearchContainer, Input, Icon, Wrapper, FaveButtonContainer, Counter} from './styles'
import {Close, Button} from '../../styles'

const FaveButton = ({showOnDesktop, showFaves, toggleShowFaves, faveBookIds}) => {
  return (
    <FaveButtonContainer style={showOnDesktop === true ? {display:'none'} : {display:'flex'}}>
      <Counter $showFaves={showFaves} >{faveBookIds}</Counter>
      <Button $isHeader='isHeader' onClick={toggleShowFaves}>{(showFaves === true) ? "Hide faves" : "Show Faves"}</Button>
    </FaveButtonContainer>
  )
}

const Search = ({filterBooks, showFaves, toggleShowFaves, faveBookIds}) => {
  const inputEl = useRef(null)
  const [showOnDesktop, setShowOnDesktop] = useState(false)

  const handleChange = (event) => {
    filterBooks(event.target.value)
  }

  const clearSearch = () => {
    filterBooks('')
    inputEl.current.value = ''
    setShowOnDesktop(false)
  }

  const showSearch = () => {
    console.log('showSearch')
    setShowOnDesktop(true)
  }

  return (
    <Wrapper>
      <FaveButton showOnDesktop={showOnDesktop} showFaves={showFaves} toggleShowFaves={toggleShowFaves} faveBookIds={faveBookIds}/>
      <SearchContainer $showOnDesktop={showOnDesktop}>
        <Icon onClick={showSearch} />
        <Input ref={inputEl} type="text" name="search" autoComplete="off" onChange={handleChange} />
        <Close onClick={clearSearch} />
      </SearchContainer>
    </Wrapper>
  )
}

export default Search