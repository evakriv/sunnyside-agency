const menuIcon=document.querySelector('#burger-menu-icon');
const dropdown = document.querySelector('.dropdown');


//menu appears on click
menuIcon.addEventListener('click',()=>{
    dropdown.classList.toggle('hidden');

})