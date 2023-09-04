let body = document.querySelector('body');
let button = document.getElementById('btn-menu');
let burgerNav = document.querySelector('.navigation');
let navLinks = document.querySelectorAll('.navigation__list-link');
let classActive = 'js-active-open';
let classNoActive = 'no-js';

export function burger() {
	if (button) {
		button.addEventListener("click", function () {
			burgerNav.classList.toggle(classActive);
			burgerNav.classList.toggle(classNoActive);
			body.classList.toggle(classActive);
		});

		navLinks.forEach((el) => {
			el.addEventListener("click", function () {
				burgerNav.classList.remove(classActive);
				burgerNav.classList.add(classNoActive);
			});
		});
	}
}
