import Swiper from 'swiper'

import { Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
Swiper.use([Pagination])
console.log('tech')
let swiperTechIn

function initSwiper() {
  if (window.innerWidth < 768) {
    if (!swiperTechIn) {
      swiperTechIn = new Swiper('.swiper-tech', {
        modules: [Pagination],
        loop: true,
        slidesPerView: 'auto',
        spaceBetween: 15,

        pagination: {
          el: '.tech-pagination'
        }
      })
    }
  } else {
    if (swiperTechIn) {
      swiperTechIn.destroy(true, true)
      swiperTechIn = null
    }
  }
}

initSwiper()
window.addEventListener('resize', () => {
  initSwiper()
})

const tech = document.querySelector('.tech-list')
const readTech = tech.querySelector('.tech-read')
const gridTech = tech.querySelector('.tech-wrapper')

readTech.addEventListener('click', () => {
  readTech.classList.toggle('tech-active')
  gridTech.classList.toggle('tech-expanded')
})
console.log(document.querySelector('.tech-list'))
