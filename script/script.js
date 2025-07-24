"use strict";

document.addEventListener('DOMContentLoaded', function() {
    const burger = document.querySelector('.burger-button');
    const menu = document.querySelector('.header__nav-list');

    burger.addEventListener('click', function() {
        this.classList.toggle('active');
        menu.classList.toggle('menu-open');
    })
});