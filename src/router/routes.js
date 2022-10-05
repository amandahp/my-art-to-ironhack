import { Home, RandomArtPage, SearchArts, AllArts, About } from '../pages'

export const routes = [
  { path: '/home', element: <Home />, header: false },
  { path: '/my-art', element: <RandomArtPage />, header: true },
  { path: '/search-arts', element: <SearchArts />, header: true },
  { path: '/some-arts', element: <AllArts />, header: true },
  { path: '/about', element: <About />, header: true }
]
