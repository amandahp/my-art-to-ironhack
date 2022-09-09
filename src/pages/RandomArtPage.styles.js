import styled from 'styled-components'
import { devices } from '../devices'

export const MyArt = styled.main`
  ${({ theme }) => `
  background-color: ${theme.color.richBlackFogra};
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction:column;
  align-items: center;

  @media ${devices.mobileS}{
    width: 100vw;
    height: 100%;
  }

  @media ${devices.laptop}{
    width: 100vw;
    height: 100vh;
  }
  `}
`