import styled from 'styled-components'

export const Container = styled.div`
  ${({theme}) => `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-content: flex-start;
    margin-top: 20px;
    margin-bottom: 50px;
    width: 100%;
    color: ${theme.color.white};
    font-size: 4em;
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