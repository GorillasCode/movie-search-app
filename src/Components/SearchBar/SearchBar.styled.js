import styled from 'styled-components'

export const SearchBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`
export const SearchBarInput = styled.input`
  background-color: white;
  padding: 8px;
  border-radius: 5px;
`
export const StyledButton = styled.button`
    align-items: center;
    background-color: #0a66c2;
    border: 0;
    border-radius: 100px;
    box-sizing: border-box;
    color: #ffffff;
    cursor: pointer;
    display: inline-flex;
    font-family: -apple-system, system-ui, system-ui, 'Segoe UI', Roboto,
      'Helvetica Neue', 'Fira Sans', Ubuntu, Oxygen, 'Oxygen Sans', Cantarell,
      'Droid Sans', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
      'Lucida Grande', Helvetica, Arial, sans-serif;
    font-size: 16px;
    font-weight: 600;
    justify-content: center;
    position: absolute;
    line-height: 20px;
    max-width: 480px;
    min-height: 40px;
    min-width: 0px;
    overflow: hidden;
    margin-top: 1rem;
    position: absolute;
    right: 40rem;
    padding: 0px;
    padding-left: 20px;
    padding-right: 20px;
    text-align: center;
    touch-action: manipulation;
    transition: background-color 0.167s cubic-bezier(0.4, 0, 0.2, 1) 0s,
      box-shadow 0.167s cubic-bezier(0.4, 0, 0.2, 1) 0s,
      color 0.167s cubic-bezier(0.4, 0, 0.2, 1) 0s;
    user-select: none;
    -webkit-user-select: none;
    vertical-align: middle;
  }

  button:hover {
    background-color: #16437e;
    color: #ffffff;
  }

  button:active {
    background: #09223b;
    color: rgb(255, 255, 255, 0.7);
  }
`
