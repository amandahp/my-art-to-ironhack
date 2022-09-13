import styled from 'styled-components'

export const Container = styled.div`
  ${({theme}) => `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-content: flex-start;
    margin-top: 150px;
    margin-bottom: 50px;
    width: 100%;
    color: ${theme.color.white};
    font-size: 4em; 
    h1{
      font-family: 'Qwitcher Grypen', cursive;
      margin: 10px 10px 10px 10px;
    }
  
  `}

`

export const Search = styled.input`
  ${({theme}) => `
    padding: 15px;
    width: 70%;
    ::placeholder{
      font-family: 'Qwitcher Grypen', cursive;
      font-size: 2em;
      color: ${theme.color.richBlackFogra};
    }
  
  `}

`