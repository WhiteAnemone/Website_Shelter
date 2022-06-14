window.addEventListener('DOMContentLoaded', function () {
    
    let menu = document.querySelector('.header_list_nav');
    let button = document.querySelector('.header_burger');
    let links = document.querySelectorAll('.header_list_link');
    let overlay = document.querySelector('.burger-menu_overlay');
    let logo = document.querySelector('.header_logo');
    let logo_in_burger = document.querySelector('.header_logo_in_burger');

    button.addEventListener('click', (e) => {
        e.preventDefault();
        toggleMenu();
    });

    links.forEach(el => el.addEventListener('click', () => toggleMenu()));

    overlay.addEventListener('click', () => toggleMenu());

    function toggleMenu() {
        menu.classList.toggle('header_list_burger');
        button.classList.toggle('burger_active');
        logo.classList.toggle('header_logo_hidden');
        logo_in_burger.classList.toggle('header_logo_in_burger_visible');

        if (menu.classList.contains('header_list_burger')) {
            document.querySelector('body').setAttribute('style', 'overflow: hidden');
        } else {
            document.querySelector('body').setAttribute('style', 'overflow: visible');
        }
    }
})