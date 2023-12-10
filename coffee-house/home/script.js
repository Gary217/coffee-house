console.log ("Score: 90 points!")

document.addEventListener('DOMContentLoaded', () => {
    const burgerIcon = document.querySelector('.burger-icon');
    const burgerContant = document.querySelector('.burger-contant');
    const burgerSvg1 = document.querySelector('.burger-icon__svg1');
    const burgerSvg2 = document.querySelector('.burger-icon__svg2');

    const toggleMenu = () => {
        burgerContant.classList.toggle('burger-contant_open');
        burgerIcon.classList.toggle('burger-icon_close');
        burgerSvg1.classList.toggle('burger-icon__svg1_close');
        burgerSvg2.classList.toggle('burger-icon__svg2_close');
    };

    burgerIcon.addEventListener('click', toggleMenu);
    burgerContant.addEventListener('click', (event) => {
        if (event.target.classList.contains('burger-contant__link')) {
            toggleMenu();
        }
    });
});