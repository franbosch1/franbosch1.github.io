(function(){
const openButton = document.querySelector('.nav__menu');//Obtener informacion de la class .nav__menu
const menu = document.querySelector('.nav__link');
const closeMenu= document.querySelector('.nav__close');
openButton.addEventListener('click', ()=>{
    menu.classList.add('nav__link--show');//El menu agrega la class nav__link--show a sus clases



});
closeMenu.addEventListener('click', ()=>{
    menu.classList.remove('nav__link--show');//Elimina la class nav__link--show
})
})();