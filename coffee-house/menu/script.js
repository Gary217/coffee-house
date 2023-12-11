import productsData from '../assets/products.json' assert { type: 'json' };

document.addEventListener('DOMContentLoaded', () => {

    //burger
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

    //category switching
    const coffeeTab = document.querySelector('.main-offer__coffee-btn');
    const teaTab = document.querySelector('.main-offer__tea-btn');
    const dessertTab = document.querySelector('.main-offer__dessert-btn');

    const showTab = (argCategory) => {
        const productsContainer = document.querySelector('.main-grid');
        const refresh = document.querySelector('.main-grid__refresh-container');

        productsContainer.innerHTML = "";

        const filteredProducts = productsData.filter(product => product.category === argCategory);

        //generating cards from JSON
        const cards = filteredProducts.map((product, index) => {
            const card = document.createElement('div');
            card.classList.add('main-grid__preview');
            productsContainer.appendChild(card);
            
            const imgWrapper = document.createElement('div');
            imgWrapper.classList.add('main-grid__img-wrapper');
            card.appendChild(imgWrapper);
    
            const img = document.createElement('div');
            img.style.background = `url(../assets/img/${product.category}/${product.category}-${index + 1}.jpg) 50% / cover no-repeat`;
            img.classList.add('main-grid__img');
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

        productsContainer.appendChild(refresh);
        return cards;
    };

    //limiting cards
    const cardsLimiter = (arg) => {
        const screenWidth = window.innerWidth;

        arg.forEach((value) => {
            value.style.display = '';
        });

        if (screenWidth < 769) {
            arg.forEach((value, index) => {
                if (index > 3) {
                    value.style.display = 'none';
                };
            });
        }
    };

    const addEventListeners = (arg) => {
        window.addEventListener('load', () => cardsLimiter(arg));
        window.addEventListener('resize', () => cardsLimiter(arg));
    };

    //default tab
    const defaultCards = showTab('coffee'); 
    coffeeTab.classList.add('main-offer__btn_active');
    cardsLimiter(defaultCards);
    addEventListeners(defaultCards);

    //styling active-tab
    coffeeTab.addEventListener('click', (event) => {
        const coffeeCards = showTab('coffee');
        cardsLimiter(coffeeCards);
        addEventListeners(defaultCards);
        event.target.classList.add('main-offer__btn_active');
        teaTab.classList.remove('main-offer__btn_active');
        dessertTab.classList.remove('main-offer__btn_active');
    });
    teaTab.addEventListener('click', (event) => {
        const teaCards = showTab('tea');
        cardsLimiter(teaCards);
        addEventListeners(teaCards);
        event.target.classList.add('main-offer__btn_active');
        coffeeTab.classList.remove('main-offer__btn_active');
        dessertTab.classList.remove('main-offer__btn_active');
    });
    dessertTab.addEventListener('click', (event) => {
        const dessertCards = showTab('dessert');
        cardsLimiter(dessertCards);
        addEventListeners(dessertCards);
        event.target.classList.add('main-offer__btn_active');
        teaTab.classList.remove('main-offer__btn_active');
        coffeeTab.classList.remove('main-offer__btn_active');
    });
});