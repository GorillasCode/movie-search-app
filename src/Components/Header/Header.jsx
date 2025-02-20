import React from 'react'
import { HeaderContainer, Logo, SearchBarInput } from './Header.styled.js'
import LogoImage from '../../assets/Logo.png'
export const Header = () => {
  return (
    <HeaderContainer>
      <Logo src={LogoImage} alt="Logo Movie Search" />
      <SearchBarInput
        id="filled-basic"
        label="Search for movies"
        variant="filled"
      />
      {/* <StyledButton>Search</StyledButton> */}
    </HeaderContainer>
  )
}
