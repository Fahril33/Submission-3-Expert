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

// Modal ukuran layar
var modal = document.getElementById("myModal");
var closeBtn = document.getElementsByClassName("close")[0];

function hideModal() {
  modal.style.display = "none";
}

closeBtn.addEventListener("click", hideModal);
window.addEventListener("load", showModal);
