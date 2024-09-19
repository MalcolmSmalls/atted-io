const closeBtn = document.querySelector('.close-nav-btn')
const openNav = document.querySelector('.open-nav-wrapper')
const headerNav = document.querySelector('.header-nav')

closeBtn.addEventListener('click', function(){
   headerNav.classList.remove('open-nav')
})


openNav.addEventListener('click', function(){
    headerNav.classList.add('open-nav')
})