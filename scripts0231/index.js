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

document.querySelector("#blwnav2_images_buttons1").addEventListener("mouseover",()=>{
    console.log('over 1')
    // document.querySelector("#blwnav2_images_buttons1").style.background = "black";
    document.getElementById("overHoverImg").src = "https://storage.sg.content-cdn.io/in-resources/b368029c-a4dd-448a-a888-58348cb1b144/Images/userimages/bslide1.jpg"
    document.querySelector("#blwnav2_div2 h2").innerText = "BADMINTON RACKET STRINGING";
    document.querySelector("#blwnav2_div2 p").innerText = ">Some players prefer to have the comfort, power and flexibility to choose a combination of features on a single string. For this, few tennis brands offer Hybrid Strings, which have one string for Mains and a different string for Crosses. Now, YOU can also create your very own hybrid string! To avail of this service at Sportsjam.in, add your favourite racquet in your order, along with Tennis String for Mains and Tennis String for Crosses (Hybrid Stringing). Please note that a good understanding of string features are required to achieve an optimum balance between comfort, durability, control and power."


});
document.querySelector("#blwnav2_images_buttons2").addEventListener("mouseover",()=>{
    console.log('over 2')
    // document.querySelector("#blwnav2_images_buttons2").style.background = "black";
    document.getElementById("overHoverImg").src = "https://storage.sg.content-cdn.io/in-resources/b368029c-a4dd-448a-a888-58348cb1b144/Images/userimages/BadmintonStringing.jpg"
    document.querySelector("#blwnav2_div2 h2").innerText = "HYBRID RACKET STRINGING";
    document.querySelector("#blwnav2_div2 p").innerText = "Intermediate and advanced rackets usually come in unstrung condition. We help you with stringing it with your choice of strings, to get your racket perform as per your playing style. At Sportsjam.in , we offer the best range of tennis and badminton rackets and strings of top brands. To avail this service, choose your favourite new racket, add Racket Stringing Service, mentioning your choice of string and tension in your order. Get your very own customised racket – ready to play!"

});
document.querySelector("#blwnav2_images_buttons3").addEventListener("mouseover",()=>{
    console.log('over 3')
    // document.querySelector("#blwnav2_images_buttons3").style.background = "black";
    document.getElementById("overHoverImg").src = "https://storage.sg.content-cdn.io/in-resources/b368029c-a4dd-448a-a888-58348cb1b144/Images/userimages/bslide5.jpg"
    document.querySelector("#blwnav2_div2 h2").innerText = "TT BAT ASSEMBLY";
    document.querySelector("#blwnav2_div2 p").innerText = "Choose a ready-to-play Table Tennis bat from the best manufacturers or build your very own customized bat! We provide you a wide range of Rubbers and Blades from the best brands. Now you can make your desired combination across brands and according to your playing style. To avail this service at Sportsjam.in, add a blade, 2 rubbers (black and red) and the TT bat assembly service in your order."

});
document.querySelector("#blwnav2_images_buttons4").addEventListener("mouseover",()=>{
    console.log('over 4')
    // document.querySelector("#blwnav2_images_buttons4").style.background = "black";
    document.getElementById("overHoverImg").src = "https://storage.sg.content-cdn.io/in-resources/b368029c-a4dd-448a-a888-58348cb1b144/Images/userimages/bslide2.jpg"
    document.querySelector("#blwnav2_div2 h2").innerText = "CRICKET BAT KNOCKING IN";
    document.querySelector("#blwnav2_div2 p").innerText = "Buying your best suited Cricket Bat is the key to score those massive runs – true, yet the important process often ignored is getting your bat ready to play. Get your bat knocked-in to prepare the blade for optimum performance and longevity. In this, the bat goes through a process of oiling and hammer/ball knocks to make it ready to face the impact of high speed deliveries. To avail this service at Sportsjam.in, add your desired English willow bat along with the knocking-in service in your order."

});