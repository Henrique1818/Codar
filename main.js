const menuBtn = document.querySelector('.btn-menu')
const show = document.querySelector('.navbar')
let menuOpen = false

menuBtn.addEventListener('click', () => {
    if(!menuOpen) {
        menuBtn.classList.add('action')
        show.classList.add('show')
        menuOpen = true;
    } else {
        menuBtn.classList.remove('action')
        show.classList.remove('show')
        menuOpen = false;
    }
})