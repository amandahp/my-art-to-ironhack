import styled from 'styled-components'
import { devices } from '../devices'

export const BoxArt = styled.div`
   ${({ theme }) => `
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      align-content: center;
      padding: 10px 10px 10px 10px;
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
      width: 80%;
      height: 70% ;
      color: ${theme.color.white};
      font-size: 1em;
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
      color: ${theme.color.white};
      font-size: 1em;
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