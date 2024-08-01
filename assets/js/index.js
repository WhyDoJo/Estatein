// ======= TAGLINE
import tagline from './modules/tagline.js'
tagline()

// ======= SWIPER
const swiper = new Swiper('.swiper', {
	slidesPerView: 3,
	allowTouchMove: false,

	// Navigation arrows
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
})

//  ======== swiper__number
// Получаем все контейнеры
const containers = document.querySelectorAll('.swiper-navigation')

// Проходим по каждому контейнеру
containers.forEach(container => {
	// Находим элементы внутри контейнера
	const firstNum = container.querySelector('.swiper-first-number')
	const btnNext = container.querySelector('.swiper-button-next')
	const btnPrev = container.querySelector('.swiper-button-prev')

	// Устанавливаем начальное значение
	firstNum.textContent = 1

	// Добавляем обработчики событий
	btnNext.addEventListener('click', function () {
		firstNum.textContent = Number(firstNum.textContent) + 1
	})

	btnPrev.addEventListener('click', function () {
		firstNum.textContent = Number(firstNum.textContent) - 1
	})
})
