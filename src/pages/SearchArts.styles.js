import styled from 'styled-components'
import { devices } from '../devices'


export const Search = styled.main`
  ${({ theme }) => `
    background-color:  ${theme.color.richBlackFogra};
    display: flex;
    flex-direction: column;
    gap:12px;
    align-items: center;
    justify-content: center;
    overflow-x:hidden;
    height: 100vh;
    width: 100vw;

    h1{
      font-family: 'Qwitcher Grypen', cursive;
      color: ${theme.color.white};
      font-size: 3rem; 
      margin-top: 150px ;
    }
  `}
`


export const Title = styled.h1`
  ${({ theme }) => `
    color: ${theme.color.white};  
    font-size: 12em;
    font-family: 'Qwitcher Grypen', cursive;
  `}
`

export const Container = styled.div`
  ${({ theme }) => `
    display: grid;
    grid-column-gap: 20px;
    grid-row-gap: 10px;
    max-height:80%;
    margin-top:auto;
    h3{ 
      color: ${theme.color.white};
      font-size: 1rem;
    }
    div{
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
    img{
      width: 300px;
      max-height: 350px;
    }
    @media ${devices.mobileS}{
      height: 100%;
      grid-template-columns: repeat(1, 1fr);
    }
    @media ${devices.tablet}{
      height: 100%;
      grid-template-columns: repeat(3, 1fr);
    }
  `}

`