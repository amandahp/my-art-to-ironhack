import styled from 'styled-components'
import { devices } from '../devices'

export const MyArt = styled.main`
  ${({ theme }) => `
  background-color: ${theme.color.richBlackFogra};
  display: flex;
  flex-direction:column;
  align-items: center;
  justify-content: flex-start;
  height: 100vh;
  width: 100vw;
  h1{
    margin-bottom: 50px;
  }
  p{
    color: ${theme.color.white};
  }
  @media ${devices.mobileS}{
      color: ${theme.color.white};
      font-size: 3em;
      h1 {
          font-family: 'Qwitcher Grypen', cursive;
          padding: 10px 10px 10px 10px ;
      }
    }

  @media ${devices.tablet}{
    font-size: 5em;
  }
  `}
`