import 'regenerator-runtime'
import '../styles/style.css'
import '../styles/responsive.css'
import App from './views/app'
import swRegister from './utils/sw-register'

const app = new App({
  button: document.querySelector('#burger'),
  drawer: document.querySelector('#drawer'),
  content: document.querySelector('#mainContent'),
  hero: document.querySelector('.hero')
})

const skipLink = document.querySelector('.skip')
const mainContent = document.querySelector('#mainContent')

skipLink.addEventListener('click', (event) => {
  event.preventDefault()
  mainContent.scrollIntoView({ behavior: 'smooth' })
  skipLink.blur()
})

window.addEventListener('hashchange', () => {
  app.renderPage()
})

window.addEventListener('load', () => {
  app.renderPage()
  swRegister()
})

// Ambil elemen modal
var modal = document.getElementById("myModal");

// Ambil elemen tombol penutup
var closeBtn = document.getElementsByClassName("close")[0];

// Fungsi untuk menyembunyikan modal
function hideModal() {
  modal.style.display = "none";
}

// Tambahkan event listener pada tombol penutup
closeBtn.addEventListener("click", hideModal);

// Panggil fungsi showModal saat halaman dimuat
window.addEventListener("load", showModal);
