import { BrowserRouter, Routes } from 'react-router-dom'
import buildRoutes from './router'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>{buildRoutes()}</Routes>
    </BrowserRouter>
  )
}

