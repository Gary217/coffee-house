// import productsData from '../assets/products.json';
console.log ("Score: 90 points!")

document.addEventListener('DOMContentLoaded', () => {
    const burgerIcon = document.querySelector('.burger-icon');
    const burgerContent = document.querySelector('.burger-content');
    const burgerSvg1 = document.querySelector('.burger-icon__svg1');
    const burgerSvg2 = document.querySelector('.burger-icon__svg2');

    const toggleMenu = () => {
        burgerContent.classList.toggle('burger-content_open');
        burgerIcon.classList.toggle('burger-icon_close');
        burgerSvg1.classList.toggle('burger-icon__svg1_close');
        burgerSvg2.classList.toggle('burger-icon__svg2_close');
    };

    burgerIcon.addEventListener('click', toggleMenu);
    burgerContent.addEventListener('click', (event) => {
        if (event.target.classList.contains('burger-content__link')) {
            toggleMenu();
        }
    });
});