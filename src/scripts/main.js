import initHome from "./pages/home.js";
import initMenu from "./pages/menu.js";
import '../styles/main.scss';

const page = document.body.dataset.page;

if (page === 'home') {
    initHome();
} else if (page === 'menu') {
    initMenu();
}

// console.log('Trigger gh-pages deploy');