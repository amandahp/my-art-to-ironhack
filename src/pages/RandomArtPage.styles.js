import styled from 'styled-components'

export const MyArt = styled.main`
  ${({ theme }) => `
  background-color: ${theme.color.richBlackFogra};
  display: flex;
  flex-direction:column;
  align-items: center;
  overflow-x:hidden;

  `}
`