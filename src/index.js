import ReactDOM from 'react-dom'

import { ThemeProvider } from 'styled-components'
import GlobalStyles from './GlobalStyles'

import App from './App'

import { theme } from './theme'
import { QueryClient, QueryClientProvider } from "react-query"

const queryClient = new QueryClient()
ReactDOM.render(
  <QueryClientProvider client={queryClient}>

  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <App />
  </ThemeProvider>
  </QueryClientProvider>
  ,
  
  document.getElementById('root')
)