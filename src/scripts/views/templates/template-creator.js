import CONFIG from '../../globals/config'

const createRestaurantDetailTemplate = (restaurant) => `
  <style>
    .hero{
      display: none;
    }
  </style>
  
  <p class="detail-item_name">
    ${restaurant.name}
  </p>
  <article class="detail" id="detail">

    <div class="detail-item">
      <div class="container_img">
        <img class="detail_img lazyload" src="
        ${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" 
        alt="${restaurant.name}" crossorigin="anonymous"/>
      </div>
    </div>
    <div class="detail-item">
      <div class="detail-item_content">

        <table>
          <tr>
            <td>Alamat</td>
            <td> : </td>
            <td>${restaurant.address}, ${restaurant.city}</td>
          </tr>
          <tr>
            <td>Rating</td>
            <td> : </td>
            <td>${restaurant.rating} ⭐</td>
          </tr>
          <tr>
            <td>Deskripsi</td>
            <td> : </td>
            <td>${restaurant.description}</td>
          </tr>
        </table>
        

        <hr>
        <h3>Menu:</h3>
        <hr>
        <table>
          
          <tr>
            <td><strong>Foods:</strong></td>
            <td>
              <ul>
                ${restaurant.menus.foods
                  .map((food) => `<li>${food.name}</li>`)
                  .join('')}
              </ul>
            </td>
          </tr>
          <tr>
            <td><strong>Drinks:</strong></td>
            <td>
              <ul>
                ${restaurant.menus.drinks
                  .map((drink) => `<li>${drink.name}</li>`)
                  .join('')}
              </ul>
            </td>
          </tr>          
        </table>
     
        <hr>
        <h3>Customer Reviews:</h3>
        <hr>

        ${
          restaurant.customerReviews.length > 0
            ? restaurant.customerReviews
                .map(
                  (review) => `
            <div class="customer-review">
              <div class="review-item">
                <img class="" src="" alt="">
              </div>

              <div class="review-item">
                <p class="review-name"><strong>${review.name}</strong></p>
                <span>${review.date}</span>
                <p class="review-text">${review.review}</p>
              </div>
            </div>
          `
                )
                .join('')
            : '<p>No customer reviews yet.</p>'
        }
      </div>
    </div>
  </article>
`

const createRestaurantListTemplate = (
  restaurants
) => `<article class="list-item" data-title">
        <img
          class="list-item_img lazyload"
          data-src="${CONFIG.BASE_IMAGE_URL + restaurants.pictureId}"
          alt="Foto resto ${restaurants.name}" crossorigin="anonymous"
        />
        </div>
        <div class="list-item_content">
          <h2 class="list-item_name">
            <a class="restaurant-item_link" id="target" href="/#/detail/${
              restaurants.id
            }">${restaurants.name}</a>
          </h2>
          <span class="list-item_city">
          ${restaurants.city}
          </span>
          <p class="list-item_description">
          ${restaurants.description}
          </p>
          <p class="list-item_rate">
          ⭐${restaurants.rating}
          </p>
      </article>`

const createLikeRestoButtonTemplate = () => `
  <button aria-label="like this resto" id="likeButton" class="fav">
    <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`

const createUnlikeRestoButtonTemplate = () => `
  <button aria-label="unlike this resto" id="likeButton" class="fav">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`

export {
  createRestaurantListTemplate,
  createRestaurantDetailTemplate,
  createLikeRestoButtonTemplate,
  createUnlikeRestoButtonTemplate
}
