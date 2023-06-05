import RestaurantSource from '../../data/restaurant-source'
import { createRestaurantListTemplate } from '../templates/template-creator'

const ListRestaurant = {
  async render () {
    return `
      <div class="container">
          <h1 class="headContent" >Suka yang mana nih..?</h1>
          <div class="lists" id="lists">
          <!-- Isi Konten -->
          </div>

          <!--  -->

          <div class="profile" id="about">
           <article class="profile-card">
              <h1 class="about">MORE ABOUT ME</h1>
              <img
                class="profile-img"
                src="./mypict.jpg"
                alt="Foto Pembuat Halaman"
              />
              <div class="profile-content">
                <h2 class="about-name">
                  M. Fahril
                </h2>
                <P>Student of Dicoding SIB 4</P>
                <div class="icon">
                  <a href="http://wa.me/+6281342246239">
                    <img
                      src="./social/WhatsApp.png"
                      alt=""
                      class="contact-image"
                    />
                  </a>
                  <a href="https://www.instagram.com/muhammad_fchrl/">
                    <img
                      src="./social/Instagram.png"
                      alt=""
                      class="contact-image"
                    />
                  </a>
                  <a href="https://discordapp.com/users/756418399873138728">
                    <img src="./social/Discord.png" alt="" class="contact-image" />
                  </a>
                  <a href="https://web.facebook.com/ClasherPensiun24">
                    <img
                      src="./social/Facebook.png"
                      alt=""
                      class="contact-image"
                    />
                  </a>
                  <a href="https://t.me/MuhFachril24">
                    <img
                      src="./social/Telegram.png"
                      alt=""
                      class="contact-image"
                    />
                  </a>                
                </div>                
              </div>
            </article>
          </div>
      </div>
      
    `
  },

  async afterRender () {
    const restaurants = await RestaurantSource.listRestaurant()
    // console.log(restaurants)
    const restoContainer = document.querySelector('#lists')
    if (Array.isArray(restaurants) && restaurants.length > 0) {
      restaurants.forEach((restaurant) => {
        restoContainer.innerHTML += createRestaurantListTemplate(restaurant)
      })
    } else if (restaurants === null) {
      document.querySelector('.headContent').textContent =
        'Tidak dapat memuat data, Silakan Periksa Koneksi Internet Anda.'
    } else {
      restoContainer.innerHTML = '<p>Belum ada restaurant yang tersedia.</p>'
    }

    // Fungsi ini akan dipanggil setelah render()
  }
}

export default ListRestaurant
