import styled from 'styled-components'

export const Box = styled.div`
  ${({ theme }) => `
    width: 350px;
    height:250px;
    background: rgba(255,255,255,0.8);
    z-index: 1;
    position: absolute;
    align-self: center;
    justify-self: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 3.75em;
    color: ${theme.color.charcoal};
    button{
      width: 140px;
      margin-top: 20px;
      background: ${theme.color.pullmanBrownUpsBrown};
      color: ${theme.color.charcoal};
      font-size: .8em;
      opacity: 0.9;
    }
  `}
`