import { initBurger } from '../features/burger/burger.js';
import { findTabs, tabSwitcher } from '../features/products/tabSwitcher.js';
import { cardsController, getRefreshVars } from '../features/products/cardsController.js';

export default function initMenu() {
	initBurger();

	const {coffeeTab, teaTab, dessertTab} = findTabs(); // Extract variables via destructuring
	[coffeeTab, teaTab, dessertTab].forEach(tabSwitcher);

	cardsController.cardsLimiter();
	cardsController.initRefreshButton();
	cardsController.initResizeHandler();
};