// import { navbar } from "../components/navbar.js";
// document.getElementById("navbar").innerHTML = navbar();
//========================================================
// var slides = document.querySelectorAll(".slide");
// let btns = document.querySelectorAll(".btn");
// let currentSlide = 1;
// var manualNav = function(manual){
//     slides.forEach((slide)=>{
//         slide.classList.remove("active");
        
//         btns.forEach((btn)=>{
//             btn.classList.remove("active");
//         });

//     });

//     slides[manual].classList.add("active");
    
//     btns[manual].classList.add("active");
// }
// btns.forEach((btn,i)=>{
//     btn.addEventListener("click",()=>{
//         manualNav(i);
//         currentSlide = i;
//     })
// })
//==========================================


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
let btns = document.querySelectorAll(".btn");
let slides = document.querySelectorAll("#carousel-slide img");
let currentSlide = 1;
var manualNav = function(manual){
    btns.forEach((btn)=>{
        btn.classList.remove("active");
    })
    btns[manual].classList.add("active");
}
btns.forEach((btn,i)=>{
    btn.addEventListener("click",()=>{
        manualNav(i);
        currentSlide = i;
        carousalSlide.style.transform = 'translateX('+(-size*currentSlide)+'px)';
    })
});

var repeat = function(){
    let  i= 0;
    var repeater = ()=>{
        setTimeout(() => {
            
            carousalSlide.style.transform = 'translateX('+(-size*(i+1))+'px)';
            
            btns.forEach((btn)=>{
                btn.classList.remove("active");
                btns[i].classList.add("active");
            })
            
            i++;
            if(slides.length-2==i){
                i=0;
            }
            if(i>=slides.length-1){
                return;
            }
        
            repeater();
        }, 5000);
    }
    repeater();
}
repeat()


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