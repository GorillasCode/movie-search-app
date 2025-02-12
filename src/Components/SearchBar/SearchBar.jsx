import './SearchBar.styled.js'
import {
  SearchBarContainer,
  SearchBarInput,
  StyledButton
} from './SearchBar.styled.js'
import { TextField } from '@mui/material'
const SearchBar = () => {
  return (
    <SearchBarContainer>
      <TextField id="filled-basic" label="Search for movies" variant="filled" />
      {/* <SearchBarInput placeholder="Search for movies" /> */}
      <StyledButton>Search</StyledButton>
    </SearchBarContainer>
  )
}

export default SearchBar
