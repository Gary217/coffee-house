import productsData from '../../../../assets/products.json' with { type: 'json' };

// Generating product cards
export const generateCards = (argCategory) => {
	const productsContainer = document.querySelector('.main-grid');
	const refresh = document.querySelector('.main-grid__refresh-container');

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
		// __webpack_public_path__ — a global Webpack variable that holds the correct publicPath from the config (dev - '/'; prod - '/coffee-house/').
		img.style.background = `url(${__webpack_public_path__}assets/img/${product.category}/${product.category}-${index + 1}.jpg) 50% center / cover no-repeat`;
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