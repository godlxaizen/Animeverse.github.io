// For wrapper code
let scroll1 = window.pageYOffset;
window.onscroll = function(){
    let scroll2 = window.pageYOffset;
    if(scroll1 > scroll2){
        document.querySelector('.wrapper').style.top = '0';
    }
    else{
        document.querySelector('.wrapper').style.top = '-100px';
    }
    scroll1 = scroll2;
}

// For img_slider effect

var slides = document.querySelectorAll('.slides');
var btns = document.querySelectorAll('.img_btn');
let currentSlide = 1;

// For img_slider manual 
var manulNav = function(manual){
    slides.forEach((slide) => {
        slide.classList.remove('active');

        btns.forEach((btn) => {
            btn.classList.remove('active');
        });
    });
    
    slides[manual].classList.add('active');
    btns[manual].classList.add('active');
}

btns.forEach((btn, i)=>{
    btn.addEventListener("click", () => {
        manulNav(i);
        currentSlide = 1;
    });
});

// For img_slider automatic
var repeat = function(activeClass){
    let active = document.getElementsByClassName('active');
    let i = 1;

    var repeater = () => {
        setTimeout(function(){
            [...active].forEach((activeSlide) => {
                activeSlide.classList.remove('active');
            });

        slides[i].classList.add('active');
        btns[i].classList.add('active');
        i++;

        if(slides.length == i){
            i = 0;
        }
        if(i >= slides.length){
            return;
        }
        repeater();
       },10000);
    }
    repeater();
}
repeat();



