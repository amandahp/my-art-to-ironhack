import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  *{
    margin:0;
    padding:0;
    box-sizing: border-box;
    font-family: 'Roboto Condensed', sans-serif;
    
  }

  #root{
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    font-size: 5px;
  }
  .App{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    background-color: #030305ff;
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