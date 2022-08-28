const open = document.getElementById('btn-open');
const close = document.getElementById('btn-close');

open.addEventListener('click',() => {
    document.getElementById('navbar').style.width = "20vw";
    document.getElementById('nav-menu').style.opacity = "100%";
    document.getElementById('btn-close').style.opacity = "100%"
})

close.addEventListener('click',() => {
    document.getElementById('navbar').style.width = "0vw";
    document.getElementById('nav-menu').style.opacity = "0%";
    document.getElementById('btn-close').style.opacity = "0%"
})