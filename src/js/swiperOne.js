import Swiper from 'swiper'

import { Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
Swiper.use([Pagination])

let swiperBrandIn

function initSwiper() {
  if (window.innerWidth < 768) {
    if (!swiperBrandIn) {
      swiperBrandIn = new Swiper('.swiper-brands', {
        modules: [Pagination],
        loop: true,
        slidesPerView: 'auto',
        spaceBetween: 15,

        pagination: {
          el: '.brand-pagination'
        }
      })
    }
  } else {
    if (swiperBrandIn) {
      swiperBrandIn.destroy(true, true)
      swiperBrandIn = null
    }
  }
}

initSwiper()

window.addEventListener('resize', () => {
  initSwiper()
})

const brands = document.querySelector('.brand-list')
const readBrands = brands.querySelector('.brands-read')
const gridBrands = brands.querySelector('.brands-wrapper')

readBrands.addEventListener('click', () => {
  readBrands.classList.toggle('brand-active')
  gridBrands.classList.toggle('brand-expanded')
})
