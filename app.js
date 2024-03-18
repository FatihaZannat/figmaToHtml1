const mobaile_nav = document.querySelector('.mobail-nav-item')
const mobile_menu = document.querySelector('.mobile-menu')
const mobil_menu_close = document.querySelector('.mobile-menu-close')

mobile_menu.addEventListener('click', ()=>{
    console.log('object');
    mobil_menu_close.classList.add( "active")
    mobile_menu.classList.remove("active")  
    mobaile_nav.classList.add("active")
})

mobil_menu_close.addEventListener('click' , ()=>{
    mobile_menu.classList.add( "active")
    mobil_menu_close.classList.remove('active') 
    mobaile_nav.classList.remove('active')
   
})