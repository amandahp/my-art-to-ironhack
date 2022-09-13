import styled from 'styled-components'
import { devices } from '../devices'


export const Search = styled.main`
  ${({theme}) => `
    background-color: #030305ff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    overflow-x:hidden;
  `}
`


export const Title = styled.h1`
  ${({theme}) => `
    color: ${theme.color.white};  
    font-size: 12em;
    font-family: 'Qwitcher Grypen', cursive;
    margin-top: 150px;
    margin-bottom: 50px;
  `}
`

export const Container = styled.div`
  ${({theme}) => `
    display: grid;
    height: 100%;
    grid-column-gap: 20px;
    grid-row-gap: 10px;
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
      height: 100vh;
      grid-template-columns: repeat(1, 1fr);
    }

    @media ${devices.tablet}{
      grid-template-columns: repeat(3, 1fr);
    }
  `}

`