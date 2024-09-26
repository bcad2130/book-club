import styled from 'styled-components'
import {Pill} from '../../styles'
import {ReactComponent as MagnifyingIcon} from '../../assets/search.svg'

export const SearchContainer = styled(Pill)`
  width: ${({$showOnDesktop}) => ($showOnDesktop ? '420px' : '20px')};
  transition: 300ms; 

  @media (max-width: 1000px) {
    width: 85%;
  }

  input, button {
    display: ${({$showOnDesktop}) => ($showOnDesktop ? 'block' : 'none')};

    @media (max-width: 1000px) {
      display: block;
    }
  }
`

export const Input = styled.input`
  font-family: 'Work Sans', sans-serif;
  font-weight: 700;
  font-size: 18px;
  flex-grow: 1;
  background: inherit;
  border: none;
  padding: 6px;
`

export const Icon = styled(MagnifyingIcon)`
  width: 30px;
  cursor: pointer;
`

export const Wrapper = styled.div`
  display: flex;
  gap: 20px;

  @media (max-width: 1000px) {
    background: #ffbccc;
    border-top: 2px solid #000;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 64px;
    width: 100vw;
    left: 0;
    bottom: 0;
    position: fixed;
    z-index: 1;
  }
`

export const FaveButtonContainer = styled.div`
  display: flex;

  @media (max-width: 1000px) {
    display: relative;
    left: -15px;
  }
`

export const Counter = styled(Pill)`
  position: relative;
  top: -10px;
  right: -150px;
  padding: 3px;

  @media (max-width: 1000px) {
    right: -120px;
    padding: 2px;
  }
`
