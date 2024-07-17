let btnMenu = document.getElementById('btn-menu')
let menu = document.getElementById('menu-mobile')
let overlay = document.getElementById('overlay-menu')

btnMenu.addEventListener('click', ()=>{
    menu.classList.add('abrir-menu')
})

menu.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')
})

overlay.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')
})

document.getElementById('par-perfeito').addEventListener('click', function() {
    var imageUrl = getComputedStyle(this).backgroundImage.slice(5, -2);
    window.open(imageUrl, '_blank');
});
document.getElementById('gerador').addEventListener('click', function() {
    var imageUrl = getComputedStyle(this).backgroundImage.slice(5, -2);
    window.open(imageUrl, '_blank');
});