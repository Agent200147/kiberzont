
var menu_wrapper = document.querySelector('.menu-wrapper')
var hamburger_menu = document.querySelector('.hamburger-menu')
var hamburger__menu = document.querySelector('.hamburger__menu')
menu_wrapper.addEventListener('click', function() {
    hamburger_menu.classList.toggle('animate')
    hamburger__menu.classList.toggle('show')

})