console.log ("Score: 100 points!")

// Burger
const burgerIcon = document.querySelector('.burger-icon');
const burgerContent = document.querySelector('.burger-content');
const burgerSvg1 = document.querySelector('.burger-icon__svg1');
const burgerSvg2 = document.querySelector('.burger-icon__svg2');

const toggleMenu = () => {
	const togglePairs = [
		[burgerContent, 'burger-content_open'],
		[burgerIcon, 'burger-icon_close'],
		[burgerSvg1, 'burger-icon__svg1_close'],
		[burgerSvg2, 'burger-icon__svg2_close']
	];

	for (const [element, className] of togglePairs) {
		element.classList.toggle(className);
	}
};

burgerIcon.addEventListener('click', toggleMenu);
burgerContent.addEventListener('click', (event) => {
	if (event.target.classList.contains('burger-content__link')) {
		toggleMenu();
	}
}); 