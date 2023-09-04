const swiper_about = document.querySelector(".swiper-about");
let allTHumbs = document.querySelectorAll('.swiper-aboutThumbs .swiper-wrapper .swiper-slide')

if (swiper_about) {
	const swiperAbout = new Swiper(".swiper-about", {
		slidesPerView: "auto",
		spaceBetween: 0,
		speed: 800,
		grabCursor: true,
		loop: true,
		preloadImages: true,
		autoplay: {
			delay: 4000,
			disableOnInteraction: false,
		},
		navigation: {
			nextEl: ".swiper-about-button-next",
			prevEl: ".swiper-about-button-prev",
		},
		breakpoints: {
			// 768: {
			// 	spaceBetween: 50,
			// },
			// 1024: {
			// 	spaceBetween: 80,
			// },
			// 1200: {
			// 	spaceBetween: 100,
			// },
		},
		on: {
			slideChange() {
				// const activeThumb = "swiper-slide-thumb-active";
				// const index_currentSlide = this.realIndex;
				// let index_prevSlide;

				// console.log(index_currentSlide);

				// if (index_currentSlide > 0) {
				// 	index_prevSlide = this.realIndex - 1;
				// } else {
				// 	index_prevSlide = 0
				// }

				// console.log(index_prevSlide, 'PREV');

				// let a = allTHumbs[index_currentSlide];
				// let b = allTHumbs[index_prevSlide];
				// console.log(a, 'AAA');
				// console.log(b, 'BBB');

				// a.classList.toggle(activeThumb);
				// if (
				// 	a.classList.contains(activeThumb) &&
				// 	b.classList.contains(activeThumb)
				// ) {
				// 	b.classList.remove(activeThumb);
				// }
			},
		},
	});



	// swiperAbout.activeIndex.classList.toggle("swiper-slide-thumb-active");

}
