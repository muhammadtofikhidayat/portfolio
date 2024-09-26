//menu_bar
const menu_bar =document.querySelector('#menu_bar');
const nav_menu = document.querySelector('#nav_menu');

menu_bar.addEventListener('click', function(){
         menu_bar.classList.toggle('menu_bar_active')
         nav_menu.classList.toggle('hidden');
})

//navbar_fix
window.onscroll = function(){
         const header = document.querySelector('header');
         const fix_nav = header.offsetTop;

         if(window.pageYOffset > fix_nav){
                  header.classList.add('navbar-fixed');
         }else{
                  header.classList.remove('navbar-fixed');
         }
}