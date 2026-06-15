import { generateCards } from "./generateCards.js";

let refresh;
let refreshButton;

export const getRefreshVars = () => { // This hides variables from the top level while avoiding repeated DOM queries
	if (!refresh || !refreshButton) {
		refresh = document.querySelector('.main-grid__refresh-container');
		refreshButton = document.querySelector('.main-grid__refresh');
	}

	return {refresh, refreshButton};
};

// Limiting the number of cards
const cardsLimiter = (category = cardsController.currentCategory) => {
	const {refresh} = getRefreshVars();

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

// Refresh button
const initRefreshButton = () => {
	const {refresh, refreshButton} = getRefreshVars();

    refreshButton.addEventListener('click', () => {
        const hiddenCards = document.querySelectorAll('.main-grid__preview_disabled');
        hiddenCards.forEach(value => value.classList.remove('main-grid__preview_disabled'));
        refresh.classList.add('main-grid__refresh-container_disabled');
    });
};

// Responsive handling
const initResizeHandler = () => {
    window.addEventListener('resize', () => cardsLimiter(cardsController.currentCategory));
};

export const cardsController = {
	currentCategory: 'coffee',
    cardsLimiter,
	initRefreshButton,
    initResizeHandler,
};