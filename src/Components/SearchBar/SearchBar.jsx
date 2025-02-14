import './SearchBar.styled.js'
import { SearchBarContainer, StyledButton } from './SearchBar.styled.js'
import { TextField } from '@mui/material'
const SearchBar = () => {
  return (
    <SearchBarContainer>
      <TextField id="filled-basic" label="Search for movies" variant="filled" />
      <StyledButton>Search</StyledButton>
    </SearchBarContainer>
  )
}

export default SearchBar
