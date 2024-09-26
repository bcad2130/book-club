import styled, {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Work Sans', sans-serif;
    margin: 0;
    padding: 0;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
  }
`

export const Pill = styled.div`
  background: #a7e1f8;
  border: 2px solid #000;
  border-radius: 30px;
  height: 20px;
  width: 20px;
  padding: 8px;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  display: flex;
`

export const Close = styled.button`
  background: none;
  border: 0;
  cursor: pointer;
  height: 24px;
  width: 24px;
  padding: 0;
  position: relative;

  &::before,
  &::after {
    background-color: #000;
    content: '';
    height: 24px;
    width: 2px;
    position: absolute;
    top: 0;
    left: 9px;
  }

  &::before {
    transform: rotate(45deg);
  }

  &::after {
    transform: rotate(-45deg);
  }
`

export const Button = styled.button`
  display: block;
  border: 2px solid #000;
  border-radius: 30px;
  padding: ${({$hasEmoji}) => ($hasEmoji ? '5px 14px' : '8px')};
  background: none;
  cursor: pointer;
  margin: 0 0 1em 0;
  font-family: 'Work Sans', sans-serif;
  font-size: 18px;
  width: ${({$isHeader}) => $isHeader ? '140px' : 'unset'};
  margin-bottom: ${({$isHeader}) => $isHeader ? '0' : '14px'};

  @media (max-width: 1000px) {
    font-size: 14px;
    width: ${({$isHeader}) => $isHeader ? '110px' : 'unset'};
  }
`
