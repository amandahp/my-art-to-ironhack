import styled from 'styled-components'

export const About = styled.main`
  ${({theme}) => `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    div{
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 10px 20px 10px 20px;
    }
    h1{
      color: ${theme.color.white};
      font-size: 4em;
      margin: 10px 10px 10px 10px;
    }
    p{
      color: ${theme.color.white};
      font-size: 2em;
    }
  `}
`