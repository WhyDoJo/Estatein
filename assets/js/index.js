// ======= TAGLINE
import tagline from './modules/tagline.js'
tagline()

// ======= SWIPER
const swiper = new Swiper('.swiper', {
	slidesPerView: 3,
	stretch: 0,

	pagination: {
		el: '.swiper-pagination',
		type: 'fraction',
	},

	// Navigation arrows
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
})
