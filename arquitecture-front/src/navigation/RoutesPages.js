import Produtos from './../screens/Produtos/Produtos'
import NotFound from '../screens/NotFound/NotFound'
import Login from './../screens/Login/Login'
import Home from './../screens/Home/Home'

const RoutesPages = [
  {
    name: "Produtos",
    path: "/produtos",
    component: Produtos,
    permission: ""
  },
  {
    name: "Login",
    path: "/login",
    component: Login,
    permission: "1"
  }
]

const HomePage = {
  name: "Home",
  path: "/",
  component: Home
}

const NotFoundPage = {
  name: "NotFound",
  component: NotFound
}

export {RoutesPages, HomePage,NotFoundPage}