import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  *{
    margin:0;
    padding:0;
    box-sizing: border-box;
    font-family: 'Roboto Condensed', sans-serif;
    
  }
  body {
    width: 100vw;
    height: 100vh;
    font-size: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
  }
  button {
    cursor: pointer;
    text-decoration: none;
    border: none;
    padding: 20px;
    border-radius: 4px;
    font-weight: 900;
    margin-left: 20px;
}
`

export default GlobalStyle