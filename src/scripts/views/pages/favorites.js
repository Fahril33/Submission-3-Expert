import FavoriteRestoIdb from "../../data/favorite-resto-idb";
import { createRestaurantListTemplate } from "../templates/template-creator";

const Fav = {
  async render() {
    return `
    
    <div class="container">
        <h1 class="headContent"  id="main">Resto Favorite Kamu</h1>
        <div class="lists" id="lists">
        <!-- Isi Konten -->
        </div>
    </div>
  `;
  },

  async afterRender() {
    const restaurant = await FavoriteRestoIdb.getAllResto();
    const favContainer = document.querySelector("#lists");

    if (restaurant.length === 0) {
      // document.querySelector('.headContent').textContent =
      //   'Ups! Resto Favorite Kamu Kosong'
      favContainer.innerHTML = 'Ups! Resto Favorite Kamu Kosong';      
    } else {
      restaurant.forEach((restaurant) => {
        favContainer.innerHTML += createRestaurantListTemplate(restaurant);
      });
    }

    console.log(restaurant);
  },
};

export default Fav;
