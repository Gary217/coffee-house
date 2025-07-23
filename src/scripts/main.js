import initHome from "./pages/home.js";
import initMenu from "./pages/menu.js";

const page = document.body.dataset.page;

if (page === 'home') {
    initHome();
} else if (page === 'menu') {
    initMenu();
}