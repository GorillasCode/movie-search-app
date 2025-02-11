import styled from 'styled-components'
import { Button, TextField } from '@mui/material'

export const SearchBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`
export const SearchBar = styled(TextField)`
  width: 300px .MuiInputBase-root {
    background-color: red;
    padding: 8px;
    border-radius: 5px;
  }
`
export const StyledButton = styled(Button)`
  margin-top: 10px;
  background-color: red !important;
  color: white;
  font-weight: bold;
`
