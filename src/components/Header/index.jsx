import React from 'react'
import {Logo, HeaderContainer, RightHeaderContainer} from './styles'

const Header = ({children}) => (
  <HeaderContainer>
    <a href="/">
      <Logo title="Book Club logo" />
    </a>
    <RightHeaderContainer>{children}</RightHeaderContainer>
  </HeaderContainer>
)

export default Header