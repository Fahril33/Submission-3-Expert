import ListRestaurant from '../views/pages/list'
import DetailRestaurant from '../views/pages/detail'
import Fav from '../views/pages/favorites'

const routes = {
  "/dist/list": ListRestaurant, // default page
  "/dist/list": ListRestaurant,
  "/dist/detail/:id": DetailRestaurant,
  "/dist/fav": Fav,
};

export default routes
