import Swiper from 'swiper'

import { Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
Swiper.use([Pagination])

let swiperPriceIn

function initSwiper() {
  if (window.innerWidth < 1120) {
    if (!swiperPriceIn) {
      swiperPriceIn = new Swiper('.swiper-price', {
        modules: [Pagination],
        loop: true,
        slidesPerView: 'auto',
        spaceBetween: 15,

        pagination: {
          el: '.price-pagination'
        }
      })
    }
  } else {
    if (swiperPriceIn) {
      swiperPriceIn.destroy(true, true)
      swiperPriceIn = null
    }
  }
}

initSwiper()

window.addEventListener('resize', () => {
  initSwiper()
})
