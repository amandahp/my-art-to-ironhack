import {RandomArtPage, SearchArts, AllArts, About} from '../pages'

export const routes = [
  { path: '/my-art', component: <RandomArtPage />},
  { path: '/search-arts', component: <SearchArts />},
  { path: '/some-arts', component: <AllArts />},
  { path: '/about', component: <About />}
]