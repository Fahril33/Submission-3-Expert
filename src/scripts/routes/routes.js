import ListRestaurant from '../views/pages/list'
import DetailRestaurant from '../views/pages/detail'
import Fav from '../views/pages/favorites'

const routes = {
  '/': ListRestaurant, // default page
  '/list': ListRestaurant,
  '/detail/:id': DetailRestaurant,
  '/fav': Fav
}

export default routes
