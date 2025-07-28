"use strict"

document.addEventListener('DOMContentLoaded', function() {
    const burger = document.querySelector('.burger-button');
    const menu = document.querySelector('.header__nav-list');

    burger.addEventListener('click', function() {
        this.classList.toggle('active');
        menu.classList.toggle('menu-open');
    })
});

// Страны

const catalogList = document.querySelector('.catalog__items');
const catalogBtns = document.querySelectorAll('.catalog__button');

const loadCatalog = (country) => {
    fetch ('data/data.json')
        .then((response) => {
            return response.json();
        })

        .then((data) => {
            let newContentHtml = '';
            for (const item of data) {
                if (item.country === country) {
                    // console.log(item)
                    newContentHtml +=  `

                        <li class="catalog__item">
                            <article class="product">
                                <img src="${item.cover}" alt="" class="product__image">
                                <div class="product__descritpion">
                                    <span class="product__author">${item.author}</span>
                                    <h3 class="product__title">${item.title}</h3>
                                    <span class="product__props">${item.props}</span>
                                    <span class="product__price">${item.price}</span>
                                </div>
                                <button class="product__button link" type='button'>В корзину</button>
                            </article>
                        </li>

                    `
                }
            }
            catalogList.innerHTML = newContentHtml;
        })
}

loadCatalog('France');

catalogBtns.forEach(el => {
  el.addEventListener('click', (e) => {
    e.preventDefault();


    const country = e.currentTarget.dataset.country;

    catalogBtns.forEach(el => { el.classList.remove('catalog__button--active'); });

    e.currentTarget.classList.add('catalog__button--active');

    loadCatalog(country);
  }); 
});