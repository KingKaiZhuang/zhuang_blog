let nav = document.querySelector(".navbar");
window.onscroll = ()=> {
    if(document.documentElement.scrollTop > 20){
        nav.classList.add("header-scrolled");
    }else{
        nav.classList.remove("header-scrolled");
    }
}

// nav hide
let navBar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse.collapse");
navBar.forEach(function(a){
    a.addEventListener("click",function(){
        navCollapse.classList.remove("show");
    });
});

// typed js
const typed = new Typed('.multiple-text',{
    strings: ['Fronted Developer','JS Developer.','backed Developer.'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop:true
});