import styled from 'styled-components'

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  margin-bottom: 5rem;
`
export const Logo = styled.img`
  width: 24rem;
  height: 6rem;
  object-fit: cover;
`

export const SearchBarInput = styled.input`
  width: 40%;
  max-width: 22rem;
  height: 2rem;
  border-radius: 4px;
  padding-left: 12px;
  font-size: 14px;
  font-weight: normal;
  font-family: montserrat, monospace;
  border: 1px solid rgb(137, 151, 155);
  transition: border-color 150ms ease-in-out 0s;
  outline: none;
  color: rgb(33, 49, 60);
  background-color: rgb(255, 255, 255);
  padding-right: 12px;
  :hover {
    box-shadow: rgb(231 238 236) 0px 0px 0px 3px;
  }
`
