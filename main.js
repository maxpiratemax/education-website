/* Change navbar color */
const navBar = document.querySelector('nav')

window.addEventListener('scroll', ()=>{
    navBar.classList.toggle('window-scroll', window.scrollY > 0)
})