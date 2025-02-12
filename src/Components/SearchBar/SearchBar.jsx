import './SearchBar.styled.js'
import { SearchBarContainer, StyledButton } from './SearchBar.styled.js'
import { TextField } from '@mui/material'
import { searchMovies } from '../../Services/theMovieService.js'
const SearchBar = () => {
  const handleSearch = async () => {
    const movies = await searchMovies('Unchained django')
    console.log(movies)
  }
  return (
    <SearchBarContainer>
      <TextField id="filled-basic" label="Search for movies" variant="filled" />
      {/* <h3>{handleSearch()}</h3> */}
      <StyledButton>Search</StyledButton>
    </SearchBarContainer>
  )
}

export default SearchBar
