import {RandomArtPage, SearchArts, AllArts, About} from '../pages'

export const routes = [
  { path: '/my-art', component: <RandomArtPage />},
  { path: '/search-arts', component: <SearchArts />},
  { path: '/all-arts', component: <AllArts />},
  { path: '/about', component: <About />}
]