import productsData from '../assets/products.json' with { type: 'json' };

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

// Generating product cards
const refresh = document.querySelector('.main-grid__refresh-container');
const productsContainer = document.querySelector('.main-grid');
const tabsArr = document.querySelectorAll('.main-offer__btn');
const coffeeTab = document.querySelector('.main-offer__coffee-btn');
const teaTab = document.querySelector('.main-offer__tea-btn');
const dessertTab = document.querySelector('.main-offer__dessert-btn');
const refreshButton = document.querySelector('.main-grid__refresh');
let currentCategory = 'coffee';

const generateCards = (argCategory) => {
	const fragment = document.createDocumentFragment();
	const filteredProducts = productsData.filter(product => product.category === argCategory); // Filter products by selected category

	const cards = filteredProducts.map((product, index) => { // Template for generating product cards

		const card = document.createElement('div');
		card.classList.add('main-grid__preview');
		fragment.appendChild(card);

		const imgWrapper = document.createElement('div');
		imgWrapper.classList.add('main-grid__img-wrapper');
		card.appendChild(imgWrapper);

		const img = document.createElement('div');
		img.classList.add('main-grid__img');
		img.style.background = `url(../assets/img/${product.category}/${product.category}-${index + 1}.jpg) 50% center / cover no-repeat`;
		imgWrapper.appendChild(img);

		const description = document.createElement('div');
		description.classList.add('main-grid__description');
		card.appendChild(description);

		const text = document.createElement('div');
		text.classList.add('main-grid__text');
		description.appendChild(text);

		const title = document.createElement('h3');
		title.classList.add('main-grid__title');
		title.textContent = product.name;
		text.appendChild(title);
		
		const about = document.createElement('p');
		about.classList.add('main-grid__about');
		about.textContent = product.description;
		text.appendChild(about);
		
		const price = document.createElement('h3');
		price.classList.add('main-grid__price');
		price.textContent = `$${product.price}`;
		description.appendChild(price);

		return card;
	});
	productsContainer.innerHTML = '';
	productsContainer.appendChild(fragment);
	productsContainer.appendChild(refresh);
	return cards;
};

// Limiting the number of cards
const cardsLimiter = (category) => { 
	const cards = generateCards(category);

	if (window.innerWidth < 769) {

		if (cards.length < 5) { // Hiding the refresh button
			refresh.classList.add('main-grid__refresh-container_disabled');
		} else {
			refresh.classList.remove('main-grid__refresh-container_disabled');
		}

		cards.forEach((value, index) => { // Hiding extra cards on mobile
			if (index > 3) {
				value.classList.add('main-grid__preview_disabled');
			}
		});
	}
};

// Default behavior
cardsLimiter(currentCategory);
coffeeTab.classList.add('main-offer__btn_active');

// Category switching
const categorySwitching = (argTab) => {
	const categoryName = argTab.dataset.category;

	argTab.addEventListener('click', () => {
		
		tabsArr.forEach(tab => tab.classList.remove('main-offer__btn_active')); // Remove active tab highlight (even if it's not there)
		argTab.classList.toggle('main-offer__btn_active');

		currentCategory = categoryName; // Update currentCategory
		cardsLimiter(categoryName);
	});
};
[coffeeTab, teaTab, dessertTab].forEach(categorySwitching);

// Refresh button
refreshButton.addEventListener('click', () => {
	const hiddenCards = document.querySelectorAll('.main-grid__preview_disabled');
	hiddenCards.forEach(value => value.classList.remove('main-grid__preview_disabled'));
	refresh.classList.add('main-grid__refresh-container_disabled');
});

// Responsive handling
window.addEventListener('resize', () => cardsLimiter(currentCategory));