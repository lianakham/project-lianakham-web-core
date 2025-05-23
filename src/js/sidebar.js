console.log('sidebar')

const sidebar = document.querySelector('.sidebar')
const openMenu = document.querySelector('.btn-menu-icon')
const closeMenu = sidebar.querySelector('.header__open-menu')
const backGround = document.querySelector('.background')

openMenu.addEventListener('click', () => {
  sidebar.classList.toggle('sidebar-active')
  backGround.classList.toggle('sidebar-active')
})
closeMenu.addEventListener('click', () => {
  sidebar.classList.remove('sidebar-active')
  backGround.classList.remove('sidebar-active')
})
backGround.addEventListener('click', () => {
  sidebar.classList.remove('sidebar-active')
  backGround.classList.remove('sidebar-active')
})

window.addEventListener('resize', () => {
  if (window.innerWidth >= 1120) {
    sidebar.classList.remove('sidebar-active')
    backGround.classList.remove('sidebar-active')
  }
})
console.log(document.querySelector('.sidebar'))
