const toggle =  document.getElementById('toggle');
const navContainer = document.getElementById('nav'); 

toggle.addEventListener('click',()=>{
    navContainer.classList.toggle('active')
})