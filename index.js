const mobile_nav = document.querySelector('.nav-mobile');
const isActive = document.querySelector('.navContainer');

function showToggle(){
    isActive.classList.toggle("active");
}


mobile_nav.addEventListener('click',()=> showToggle());
