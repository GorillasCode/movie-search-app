import React from 'react'
import { HeaderContainer, Logo } from './Header.styled.js'
import LogoImage from '../../assets/Logo.png'
export const Header = () => {
  return (
    <HeaderContainer>
      <Logo src={LogoImage} alt="Logo Movie Search" />
    </HeaderContainer>
  )
}
