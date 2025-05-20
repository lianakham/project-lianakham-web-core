console.log('работает')

const sidebar = document.querySelector('.sidebar')
const openMenu = document.querySelectorById('#openMenu')
const closeMenu = document.querySelectorById('#closeMenu')

openMenu.addEventListener('click', () => {
  sidebar.classList.toggle('active')
})
closeMenu.addEventListener('click', () => {
  sidebar.classList.remove('active')
})
