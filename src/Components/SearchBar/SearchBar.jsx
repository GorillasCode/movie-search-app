import './SearchBar.styled.js'
import { Button, TextField } from '@mui/material'
const SearchBar = () => {
  return (
    <div>
      <TextField
        id="filled-basic"
        size="normal"
        label="Search for movies"
        variant="filled"
      />
      <Button variant="contained" color="primary">
        Search
      </Button>
    </div>
  )
}

export default SearchBar
