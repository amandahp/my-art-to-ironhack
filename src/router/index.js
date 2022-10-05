import { Route } from 'react-router-dom'
import { Header } from '../components'
import { routes } from './routes'


const buildRoutes = () => {
  return routes.map((route) => {
    return route.header ? (
      <Route
        path={route.path}
        key={route.path}
        element={
          <div className='.App'>
            <Header />
            {route.element}
          </div>
        }
      />
    ) : (
      <Route path={route.path} key={route.path} element={route.element} />
    )
  })
}
export default buildRoutes