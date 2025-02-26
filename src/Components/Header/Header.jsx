import React from 'react'
import { HeaderContainer, Logo, SearchBarInput } from './Header.styled.js'
import LogoImage from '../../assets/NewLogo.png'
import SearchIcon from '@mui/icons-material/Search'
export const Header = () => {
  return (
    <HeaderContainer>
      <Logo src={LogoImage} alt="Logo Movie Search" />
      <SearchBarInput
        id="filled-basic"
        label="Search for movies"
        variant="filled"
        placeholder="Search for movies"
      />
      {/* <SearchIcon
        style={{
          marginLeft: 10,
          position: 'absolute',
          right: '20rem',
          top: '3.7rem',
          cursor: 'pointer'
        }}
      /> */}
    </HeaderContainer>
  )
}
