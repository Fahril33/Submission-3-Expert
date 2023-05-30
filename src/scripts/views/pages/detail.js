import UrlParser from "../../routes/url-parser";
import RestaurantSource from "../../data/restaurant-source";
import { createRestaurantDetailTemplate } from "../templates/template-creator";
import LikeButtonInitiator from "../../utils/fav-button-presenter";
// import FavoriteRestoIdb from "../../data/favorite-resto-idb";

const Detail = {
  async render() {
    return `
    
    <div class="likeButtonContainer" id="likeButtonContainer"></div>
    <div class="container" id="container">
    
    
    <!-- Isi Konten -->
    
    </div>
    `;
  },

  async afterRender() {
    const { id } = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantSource.detailRestaurant(id);
    const detailContainer = document.querySelector("#container");
    detailContainer.innerHTML = createRestaurantDetailTemplate(restaurant);

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector("#likeButtonContainer"),
      restaurant: {
        id: restaurant.id,
        name: restaurant.name,
        description: restaurant.description,
        city: restaurant.city,
        address: restaurant.address,
        rating: restaurant.rating,
        pictureId: restaurant.pictureId,
      },
    });

    console.log(restaurant);
  },
};

export default Detail;
