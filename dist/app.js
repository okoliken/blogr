const menu = document.querySelector('.menu')
const mobileNav = document.querySelector('.mobile-nav')

menu.addEventListener('click',()=>{
    if (mobileNav.classList.contains('hidden') && menu.src ) {
        mobileNav.classList.replace('hidden','flex')
        menu.src='./images/icon-close.svg'
        console.log(menu.src)
    }else{
        mobileNav.classList.replace('flex','fade-out-mobile-nav');
        menu.src='./images/icon-hamburger.svg   '
        setTimeout(()=>{
            mobileNav.classList.replace('fade-out-mobile-nav','hidden'); 
        },700)
    }

})