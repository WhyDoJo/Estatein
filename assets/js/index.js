// ======= TAGLINE
import tagline from './modules/tagline.js'
tagline()

// ======= SWIPER
const swiper = new Swiper('.swiper', {
	slidesPerView: 3,
	stretch: 0,

	// Navigation arrows
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
})

//  ======== swiper__number

const firstNum = document.querySelector('.property__first-number');
const btnNext = document.querySelector('.swiper-button-next');
const btnPrev = document.querySelector('.swiper-button-prev');

firstNum.textContent = Number(1);

btnNext.addEventListener('click', function() {
	firstNum.textContent = Number(firstNum.textContent) + 1;
})

btnPrev.addEventListener('click', () => {
	firstNum.textContent = Number(firstNum.textContent) - 1;
})