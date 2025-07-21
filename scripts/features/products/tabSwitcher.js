import { cardsController } from "./cardsController.js";

export const findTabs = () => {
	const tabsArr = document.querySelectorAll('.main-offer__btn');
	const coffeeTab = document.querySelector('.main-offer__coffee-btn');
	const teaTab = document.querySelector('.main-offer__tea-btn');
	const dessertTab = document.querySelector('.main-offer__dessert-btn');
	return {tabsArr, coffeeTab, teaTab, dessertTab};
};

// Tab switching
export const tabSwitcher = (argTab) => {
	const {tabsArr, coffeeTab} = findTabs();

	cardsController.cardsLimiter(cardsController.currentCategory);
	coffeeTab.classList.add('main-offer__btn_active');

	const categoryName = argTab.dataset.category;

	argTab.addEventListener('click', () => {
		
		tabsArr.forEach(tab => tab.classList.remove('main-offer__btn_active')); // Remove active tab highlight (even if it's not there)
		argTab.classList.toggle('main-offer__btn_active');

		cardsController.currentCategory = categoryName; // Update currentCategory
		cardsController.cardsLimiter(categoryName);
	});
};