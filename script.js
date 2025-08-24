const hamburger = document.querySelector('.hamburger-icon');


const sidebarShow = document.querySelector('.side-bar');

hamburger.addEventListener('click',()=>{
    sidebarShow.classList.toggle('active')
})