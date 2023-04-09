const mobileNavbar =document.querySelector('.mobile-navbar');
const hamburger =document.querySelector('.hamburger');
const close =document.querySelector('.close');


hamburger.addEventListener('click', function(){
    mobileNavbar.classList.toggle('show');
    close.classList.add('show');
    hamburger.classList.add('hide');
});

close.addEventListener('click', function(){
    mobileNavbar.classList.toggle('show');
    close.classList.remove('show');
    hamburger.classList.remove('hide');
});

// ---------------- mobile-links ----------
// const mobileLinks = document.querySelector('.mobile-links');
const mbLinks = document.querySelectorAll('.mb-links');
const btnMobile = document.querySelector('.btn-mobile');
btnMobile.addEventListener('click', function(){
    mobileNavbar.classList.remove('show');
    close.classList.remove('show');
    hamburger.classList.remove('hide')
});
mbLinks.forEach(function(item){
    item.addEventListener('click', function(){
        mobileNavbar.classList.remove('show');
        close.classList.remove('show');
        hamburger.classList.remove('hide')
    });
})

// ********** fixed navbar ************
const nav = document.querySelector('.navbar');
window.onscroll = function(){
    if(scrollY >= 20){
       nav.classList.add('fixed');
    }
    else{
        nav.classList.remove('fixed');
    }
};