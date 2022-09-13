import styled from 'styled-components'
import { devices } from '../devices'

export const Header = styled.header`
  ${({ theme }) => `
    width: 100%;
    max-height: 200px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    text-align: center;
    background-color: ${theme.color.richBlackFogra};
    top:0;
    left: 0;

    @media ${devices.mobileS}{
      .desktop{
        display: none;
      }
      .sandwichButton{
        background: transparent;
      }
      .sandwichButton div{
        width: 35px;
        height: 5px;
        background-color: ${theme.color.white};
        margin: 6px 0;
      }
    }

    @media ${devices.tablet}{
      .mobile {
        display: none;
      }
      .desktop{
      width: 100vw;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      text-align: center;
      align-content: flex-end;
      }
      .desktop button {
      margin: 10px 10px 10px 10px;
      background: transparent;
      color: ${theme.color.white};
      font-size: 4em;
      text-align: center;
      }
      .desktop button:hover {
      border: 2px solid ${theme.color.white};
      font-size: 6em;
      font-family: 'Qwitcher Grypen', cursive; 
      }
    }  
  `}
`

export const Box = styled.div`
  ${({theme}) => `
    width: 100%;
    height: 400px;
    background: ${theme.color.raisinBlack};
    button{
      color: ${theme.color.white};
      width: 100%;
      background-color: transparent;
      height: 25%;
      font-size: 6em;

    }
    button:hover{
      font-family: 'Qwitcher Grypen', cursive; 
    }
  @media ${devices.tablet}{
    display: none;
  }

  `}

`