const menuBtn = document.querySelector('.btn-menu')
const body = document.querySelector('body')
const show = document.querySelector('.navbar')
let menuOpen = false

menuBtn.addEventListener('click', () => {
    if(!menuOpen) {
        menuBtn.classList.add('action')
        show.classList.add('show')
        body.classList.add('hide')
        menuOpen = true;
    } else {
        menuBtn.classList.remove('action')
        show.classList.remove('show')
        body.classList.remove('hide')
        menuOpen = false;
    }
})