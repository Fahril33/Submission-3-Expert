
// const menu = document.querySelector('#burger')
// const hero = document.querySelector('.hero')
// const main = document.querySelector('main')
// const drawer = document.querySelector('#drawer')

// menu.addEventListener('click', function (event) {
//   drawer.classList.toggle('open')
//   event.stopPropagation()
// })

// hero.addEventListener('click', function () {
//   drawer.classList.remove('open')
// })

// main.addEventListener('click', function () {
//   drawer.classList.remove('open')
// })

const DrawerInitiator = {
  init ({ button, drawer, content, hero }) {
    button.addEventListener('click', (event) => {
      this._toggleDrawer(event, drawer)
    })

    content.addEventListener('click', (event) => {
      this._closeDrawer(event, drawer)
    })

    hero.addEventListener('click', (event) => {
      this._closeDrawer(event, drawer)
    })
  },

  _toggleDrawer (event, drawer) {
    event.preventDefault()
    event.stopPropagation()
    drawer.classList.toggle('open')
  },

  _closeDrawer (event, drawer) {
    event.stopPropagation()
    drawer.classList.remove('open')
  }
}

export default DrawerInitiator
