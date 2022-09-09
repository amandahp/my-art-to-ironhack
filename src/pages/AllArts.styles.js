import styled from 'styled-components'

export const Title = styled.h1`
  ${({theme}) => `
    color: ${theme.color.white};  
    font-size: 5em;
  `}
`

export const Container = styled.div`
  ${({theme}) => `
    display: flex;
    flex-flow: column wrap;
    align-content: space-between;
    height: 580px;
    color: ${theme.color.white};
  `}

`