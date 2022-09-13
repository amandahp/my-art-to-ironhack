import styled from 'styled-components'
import { devices } from '../devices'

export const BoxArt = styled.div`
   ${({ theme }) => `
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      align-content: center;

      .frame{
         display: flex;
         align-items: center;
         justify-content: center;
         border-color: ${theme.color.raisinBlack} ${theme.color.charcoal};
         border-image: none;
         border-radius: 0 0 0 0;
         border-style: solid;
         border-width: 20px;
      }

   @media ${devices.mobileS}{
      width: 100%;
      height: 100% ;
      color: ${theme.color.white};
 
      font-size: 3em;
      h1 {
         font-family: 'Qwitcher Grypen', cursive;
         margin: 10px 10px 10px 10px ;
      }
      img{
         width: 260px;
         height: 220px;
         margin: 10px 10px 10px 10px ;
      }
      .frame{
         margin: 10px 10px 10px 10px;
         height: 320px;
         width: 360px;
      }
   }

   @media ${devices.tablet}{
      height: 100%;
      font-size: 5em;
      h1 {
         font-family: 'Qwitcher Grypen', cursive;
         margin: 20px 20px 20px 20px ;
      }
      color: ${theme.color.white};
      img{
         width: 550px;
         height: 450px;
         margin: 20px 20px 20px 20px ;
      }
      .frame{
         margin: 10px 10px 10px 10px;
         height: 550px;
         width: 650px;
      }
   }
`}`