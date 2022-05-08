
var count = 1;

var product = JSON.parse(localStorage.getItem("SportsJamCart"));
var cart = JSON.parse(localStorage.getItem("shoppingCart"))||[];

console.log(product)
var prodName = document.createElement("h1");
prodName.textContent = product.name;
var img = document.createElement("img");
img.setAttribute("src",product.image_url);

var strikedprc = document.createElement("p");
strikedprc.textContent = "₹" +product.strikedoffprice;
strikedprc.style.textDecoration = "line-through";
strikedprc.style.color = "grey"

var prc = document.createElement("p");
prc.textContent = "₹"+ product.price;

var discount = document.createElement("p");
    var x = Math.floor(((product.strikedoffprice-product.price)/product.strikedoffprice)*100)
    discount.textContent = x+ "%";
    discount.style.color = "orange";

var description = document.createElement("p");
description.innerHTML = product.description;

document.querySelector(".photo").append(img);
document.querySelector("#gol").append(prodName, description);
document.querySelector("#money").append(strikedprc, prc, discount);

document.t4 = product.name;    

document.querySelector("#rakh").addEventListener("click",function(){
    var qty = count
    var cartobj = {
        image: product.imgUrl,
        product_name: product.name,
        product_price: product.price,
        quantity: qty,
    }
    var obj_found = false
    for(var i =0; i<cart.length; i++){
        if(cartobj.product_name == cart[i].product_name){
            cart[i].quantity++;
            obj_found = true;
            break;
        }
    }
    if(obj_found==false){
        cart.push(cartobj);
    }
    
    localStorage.setItem("shoppingCart",JSON.stringify(cart));
    document.querySelector("#counter").textContent = cart.length;
    
    if(window.matchMedia("(min-width:800px)").matches){
        var cart1 = document.querySelector("#chah");
        cart1.innerHTML = "";
        cart.map(function(elem){        
            var div=document.createElement("div");
            div.setAttribute("id","cartshowdiv");       

            var img = document.createElement("img");
            img.setAttribute("src",elem.image);
            img.setAttribute("width","150px");
            var nm = document.createElement("p");
            nm.textContent = elem.product_name;
            var p = document.createElement("p");
            p.textContent = "₹"+elem.product_price;
            var q = document.createElement("p");
            q.textContent = "QTY:"+elem.quantity;
            div.append(img, nm, p, q);
            
            cart1.append(div);
            document.querySelector("#cart1").style.display = "block";
        })

    }
    
})

document.querySelector("#cut").addEventListener("click",function(){
    document.querySelector("#cart1").style.display = "none";
})


document.querySelector("#hep2").addEventListener("click",function(){
    count++;
    document.querySelector("#qh").textContent = count;
})
document.querySelector("#hep3").addEventListener("click",function(){
    if(count>0){
        count--;
    }
    
    document.querySelector("#qh").textContent = count;
})  

document.querySelector("#counter").textContent = cart.length;