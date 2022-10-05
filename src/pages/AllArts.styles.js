import styled from 'styled-components'
import { devices } from '../devices'

export const AllArts = styled.main`
  ${({ theme }) => `
    background-color: ${theme.color.richBlackFogra};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    overflow-x:hidden;
    height: 100vh;
  `}
`

export const Title = styled.h1`
  ${({ theme }) => `
    color: ${theme.color.white};  
    font-size: 12em;
    font-family: 'Qwitcher Grypen', cursive;
    margin-top: 250px;
    margin-bottom: 50px;
  `}
`

export const Container = styled.div`
  ${({ theme }) => `
    display: grid;
    height: 100vh;
    grid-column-gap: 0px;
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
      grid-template-columns: repeat(1, 1fr);
      height: 100%;
    }

    @media ${devices.tablet}{
      grid-template-columns: repeat(3, 0.5fr);
    }
  `}

`