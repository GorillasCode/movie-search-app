import React from 'react'
import { HeaderContainer, Logo, SearchBarInput } from './Header.styled.js'
import LogoImage from '../../assets/Logo.png'
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
      <SearchIcon
        style={{
          marginLeft: 10,
          position: 'absolute',
          right: '36.5rem',
          cursor: 'pointer'
        }}
      />
      {/* <StyledButton>Search</StyledButton> */}
    </HeaderContainer>
  )
}

// right: 35rem;
// position: absolute;
// font-size: 30px;
// margin-left: 10px;
