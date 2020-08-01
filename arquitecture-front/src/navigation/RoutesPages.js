import Produtos from './../screens/Produtos'
import NotFound from './../screens/NotFound'

const RoutesPages = [
  {
    name: "Produtos",
    path: "/produtos",
    component: Produtos
  }
]

const NotFoundPage = {
  name: "NotFound",
  component: NotFound
}

export {RoutesPages, NotFoundPage}