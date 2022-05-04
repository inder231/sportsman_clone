import { navbar } from "../components/navbar.js";
document.getElementById("navbar").innerHTML = navbar();


const carousalSlide= document.querySelector("#carousel-slide");
const carousalImages = document.querySelectorAll("#carousel-slide img");

//buttns
const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");

let counter = 1;
const size = carousalImages[0].clientWidth;
carousalSlide.style.transform = 'translateX('+(-size*counter)+'px)';

//button listeners

nextBtn.addEventListener("click",()=>{
    if(counter>=carousalImages.length-1){
        return;
    }
    carousalSlide.style.transition = 'transform 0.4s ease-in-out';
    counter++;
    // console.log(counter);
    carousalSlide.style.transform = 'translateX('+(-size*counter)+'px)';
})
prevBtn.addEventListener("click",()=>{
    if(counter<=0){
        return;
    }
    carousalSlide.style.transition = 'transform 0.4s ease-in-out';
    counter--;
    // console.log(counter);
    carousalSlide.style.transform = 'translateX('+(-size*counter)+'px)';
});
carousalSlide.addEventListener("transitionend",()=>{
    if(carousalImages[counter].id=='lastClone'){
        carousalSlide.style.transition = 'none';
        counter = carousalImages.length-2;
        carousalSlide.style.transform = 'translateX('+(-size*counter)+'px)';
    }
    if(carousalImages[counter].id=='firstClone'){
        carousalSlide.style.transition = 'none';
        counter = carousalImages.length-counter;
        carousalSlide.style.transform = 'translateX('+(-size*counter)+'px)';
    }
})

// let indicators = document.querySelector("#indicators");
let btn1 = document.querySelector("#btn1");
let btn2 = document.querySelector("#btn2");
let btn3 = document.querySelector("#btn3");
let btn4 = document.querySelector("#btn4");
let btn5 = document.querySelector("#btn5");
let btn6 = document.querySelector("#btn6");

btn1.addEventListener("click",()=>{
    carousalSlide.style.transform = 'translateX(0%)';
    btn1.classList.add("active");
    btn2.classList.remove("active");
    btn3.classList.remove("active");
    btn4.classList.remove("active");
    btn5.classList.remove("active");
    btn6.classList.remove("active");
})
btn2.addEventListener("click",()=>{
    carousalSlide.style.transform = 'translateX(-100%)';
    btn2.classList.add("active");
    btn1.classList.remove("active");
    btn3.classList.remove("active");
    btn4.classList.remove("active");
    btn5.classList.remove("active");
    btn6.classList.remove("active");
})
btn3.addEventListener("click",()=>{
    carousalSlide.style.transform = 'translateX(-200%)';
    btn3.classList.add("active");
    btn2.classList.remove("active");
    btn1.classList.remove("active");
    btn4.classList.remove("active");
    btn5.classList.remove("active");
    btn6.classList.remove("active");
})
btn4.addEventListener("click",()=>{
    carousalSlide.style.transform = 'translateX(-300%)';
    btn4.classList.add("active");
    btn2.classList.remove("active");
    btn3.classList.remove("active");
    btn1.classList.remove("active");
    btn5.classList.remove("active");
    btn6.classList.remove("active");
})
btn5.addEventListener("click",()=>{
    carousalSlide.style.transform = 'translateX(-400%)';
    btn5.classList.add("active");
    btn2.classList.remove("active");
    btn3.classList.remove("active");
    btn4.classList.remove("active");
    btn1.classList.remove("active");
    btn6.classList.remove("active");
})
btn6.addEventListener("click",()=>{
    carousalSlide.style.transform = 'translateX(-500%)';
    btn6.classList.add("active");
    btn2.classList.remove("active");
    btn3.classList.remove("active");
    btn4.classList.remove("active");
    btn5.classList.remove("active");
    btn1.classList.remove("active");
})

