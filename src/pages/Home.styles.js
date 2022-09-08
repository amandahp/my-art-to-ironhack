import styled from 'styled-components'
import { devices } from '../devices'

export const Layout = styled.main`
  ${({ theme }) => `
   width: 100% ;
   margin: auto;
   text-align: center;
   display: flex;
   flex-direction: column;
   align-items:center;
   justify-content: center;
   img{
    width: 450px;
    padding: 10px 10px 10px 10px;
    opacity: 0.8;
   }

   @media ${devices.mobileS}{
     max-width: 425px;
     .container{
       display: flex;
       flex-direction: column;
       padding: 20px 20px 20px 20px;;
       justify-content: center;
     }
     .columnOne{
      display: flex;
      flex-direction: column;
     }
   }

   @media ${devices.tablet}{
    .container{
      display: flex;
      flex-direction: row;
      padding: 20px 20px 20px 20px;
      justify-content: center;
    }
    .columnOne{
     display: flex;
     flex-direction: column;
    }
    .womanArt{
     object-fit: cover;
     object-position: 20% 10%;
    }
  }

  `}
`