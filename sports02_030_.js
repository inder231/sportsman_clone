
// import {navbar} from "../U3_sportsman_clone/components/navbar.js"
// document.getElementById("navbar1").innerHTML=navbar();

import { sidebar } from "./components/sidebar02_030.js";
document.getElementById("sidebar02_030").innerHTML=sidebar();

document.getElementById('open').addEventListener("click",function(){
    document.querySelector("#brandItems").style.display='block';
});

document.querySelector("#close").addEventListener("click",function(){
    document.querySelector("#brandItems").style.display="none";
});
document.getElementById('open1').addEventListener("click",function(){
    document.querySelector("#brandItems1").style.display='block';
});

document.querySelector("#close1").addEventListener("click",function(){
    document.querySelector("#brandItems1").style.display="none";
});
document.getElementById('open2').addEventListener("click",function(){
    document.querySelector("#brandItems2").style.display='block';
});

document.querySelector("#close2").addEventListener("click",function(){
    document.querySelector("#brandItems2").style.display="none";
});

import {itemtop} from "./components/sidebar02_030.js";
document.getElementById("itemtop").innerHTML=itemtop();

// var clothsData=[
//     {title: "Yonex Mens Polo T-Shirt",color:" (1717- Aqua Relle)", mrp: 1690, offer:"  1,399", discount: "17%", image: "https:////storage.sg.content-cdn.io/cdn-cgi/image/width=500,height=500,quality=75,format=auto,fit=cover,g=top/in-resources/b368029c-a4dd-448a-a888-58348cb1b144/Images/ProductImages/Source/YNTS1717AQRL.jpg"},
//     {title: 'Yonex Mens Polo T-Shirt ',color:' (1558 - Blazing Yellow)', mrp:  1690, offer: ' 1,399', discount: '17%', image: 'https:////storage.sg.content-cdn.io/cdn-cgi/image/width=500,height=500,quality=75,format=auto,fit=cover,g=top/in-resources/b368029c-a4dd-448a-a888-58348cb1b144/Images/ProductImages/Source/YNTS1558BYL.jpg'},
// ];


var clothsData = [
    {
      image_url:
        "https://storage.sg.content-cdn.io/cdn-cgi/image/%7Bwidth%7D,%7Bheight%7D,quality=75,format=auto,fit=cover,g=top/in-resources/b368029c-a4dd-448a-a888-58348cb1b144/Images/ProductImages/Source/YNTS1717AQRL.jpg",
      name: "YONEX MENS POLO T-SHIRT",
      brand:"YONEX",
      type:"Clothing",
      color:"blue💙",
      price: 1170,
      strikedoffprice: "2599",
    },
    {
      image_url:
        "https:////storage.sg.content-cdn.io/cdn-cgi/image/width=500,height=500,quality=75,format=auto,fit=cover,g=top/in-resources/b368029c-a4dd-448a-a888-58348cb1b144/Images/ProductImages/Source/YNTS1715HRR.jpg",
      name: "Yonex Mens Polo T-Shirt",
      brand:"YONEX",
      type:"Clothing",
      color:"red💖",
      price: 399,
      strikedoffprice: 799,
    },
    {
      image_url:
        "https://storage.sg.content-cdn.io/cdn-cgi/image/%7Bwidth%7D,%7Bheight%7D,quality=75,format=auto,fit=cover,g=top/in-resources/b368029c-a4dd-448a-a888-58348cb1b144/Images/ProductImages/Source/AS1022A115300.jpg",
      name: "ASICS GEL QUANTUM 90 RUNNING SHOES",
      brand:"ASICS",
      type:"Shoes",
      color:"teal💜",
      price: 3999,
      strikedoffprice: "5,499",
    },
    {
      image_url:
        "https://storage.sg.content-cdn.io/cdn-cgi/image/width=780,height=780,quality=75,format=auto/in-resources/b368029c-a4dd-448a-a888-58348cb1b144/Images/ProductImages/Source/KBCKBLSPEEDWH.jpg",
      name: "KOOKABURRA SPEED CRICKET BALL (WHITE)",
      brand:"KOOKABURRA",
      type:"Cricket",
      color:"white🤍",
      price: 879,
      strikedoffprice: "899",
    },
    {
      image_url:"https://storage.sg.content-cdn.io/cdn-cgi/image/%7Bwidth%7D,%7Bheight%7D,quality=75,format=auto,fit=cover,g=top/in-resources/b368029c-a4dd-448a-a888-58348cb1b144/Images/ProductImages/Source/GMCRSTCatalyst_L1.jpg",
      name: "GM CATALYST CRICKET SET",
      brand:"GM",
      type:"Cricket",
      color:"white🤍",
      price: 4525,
      strikedoffprice: "8,995",
    },
    {
      image_url:
        "https://storage.sg.content-cdn.io/cdn-cgi/image/%7Bwidth%7D,%7Bheight%7D,quality=75,format=auto,fit=cover,g=top/in-resources/b368029c-a4dd-448a-a888-58348cb1b144/Images/ProductImages/Source/PMCSH10556507.jpg",
      name: "PUMA 19 FH RUBBER SPIKE CRICKET SHOES",
      brand:"PUMA",
      type:"Shoes",
      color:"white🤍",
      price: 4125,
      strikedoffprice: "5,499",
    },
    {
      image_url:
        "https:////storage.sg.content-cdn.io/cdn-cgi/image/width=500,height=500,quality=75,format=auto,fit=cover,g=top/in-resources/b368029c-a4dd-448a-a888-58348cb1b144/Images/ProductImages/Source/YNTS1558BYL.jpg",
      name: "Yonex Mens Polo T-Shirt ",
      brand:"YONEX",
      type:"Clothing",
      color:"yellow💛",
      price: 699,
      strikedoffprice: 999,
    },
    {
      image_url:
        "https:////storage.sg.content-cdn.io/cdn-cgi/image/width=500,height=500,quality=75,format=auto,fit=cover,g=top/in-resources/b368029c-a4dd-448a-a888-58348cb1b144/Images/ProductImages/Source/YNTS1558CBLU.jpg",
      name: "Yonex Mens Polo T-Shirt ",
      brand:"YONEX",
      type:"Clothing",
      color:"blue💙",
      price: 945,
      strikedoffprice: 2099,
    },
    {
      image_url:"https://storage.sg.content-cdn.io/cdn-cgi/image/%7Bwidth%7D,%7Bheight%7D,quality=75,format=auto,fit=cover,g=top/in-resources/b368029c-a4dd-448a-a888-58348cb1b144/Images/ProductImages/Source/GMCRSTCatalyst_L1.jpg",
      name: "GM CATALYST CRICKET SET",
      brand:"GM",
      type:"Cricket",
      color:"white🤍",
      price: 4525,
      strikedoffprice: "8,995",
    },
    {
      image_url:
        "https:////storage.sg.content-cdn.io/cdn-cgi/image/width=500,height=500,quality=75,format=auto,fit=cover,g=top/in-resources/b368029c-a4dd-448a-a888-58348cb1b144/Images/ProductImages/Source/YNTS1715HRR.jpg",
      name: "Yonex Mens Polo T-Shirt",
      brand:"YONEX",
      type:"Clothing",
      color:"red💖",
      price: 399,
      strikedoffprice: 799,
    },
    {
      image_url:
        "https:////storage.sg.content-cdn.io/cdn-cgi/image/width=500,height=500,quality=75,format=auto,fit=cover,g=top/in-resources/b368029c-a4dd-448a-a888-58348cb1b144/Images/ProductImages/Source/YNTS1721PBL.jpg",
      name: " Yonex Mens Round Neck T-Shirt",
      brand:"YONEX",
      type:"Clothing",
      color:"blue💙",
      price: 1620,
      strikedoffprice: 3599,
    },
    {
      image_url:
        " https:////storage.sg.content-cdn.io/cdn-cgi/image/width=500,height=500,quality=75,format=auto,fit=cover,g=top/in-resources/b368029c-a4dd-448a-a888-58348cb1b144/Images/ProductImages/Source/YNTS1716HRRD.jpg",
      name: "Yonex Mens Polo T-Shirt",
      brand:"YONEX",
      type:"Clothing",
      color:"red💖",
      price: 1440,
      strikedoffprice: 3199,
    },
    {
      image_url:
        "https:////storage.sg.content-cdn.io/cdn-cgi/image/width=500,height=500,quality=75,format=auto,fit=cover,g=top/in-resources/b368029c-a4dd-448a-a888-58348cb1b144/Images/ProductImages/Source/YNTS1558WH.jpg",
      name: " Yonex Mens Polo T-Shirt ",
      brand:"YONEX",
      type:"Clothing",
      color:"white🤍",
      price: 1999,
      strikedoffprice: 3199,
    },
    {
      image_url:
        "https:////storage.sg.content-cdn.io/cdn-cgi/image/width=500,height=500,quality=75,format=auto,fit=cover,g=top/in-resources/b368029c-a4dd-448a-a888-58348cb1b144/Images/ProductImages/Source/YNTS1558JBLK.jpg",
      name: " Yonex Mens Polo T-Shirt ",
      brand:"YONEX",
      type:"Clothing",
      color:"black🖤",
      price: 769,
      strikedoffprice: 1099,
    },
    {
      image_url:
        "https:////storage.sg.content-cdn.io/cdn-cgi/image/width=500,height=500,quality=75,format=auto,fit=cover,g=top/in-resources/b368029c-a4dd-448a-a888-58348cb1b144/Images/ProductImages/Source/YNTS1716WH.jpg",
      name: "Yonex Mens Polo T-Shirt ",
      brand:"YONEX",
      type:"Clothing",
      color:"white🤍",
      price: 1299,
      strikedoffprice: 1440,
    },
    {
      image_url:
        " https:////storage.sg.content-cdn.io/cdn-cgi/image/width=500,height=500,quality=75,format=auto,fit=cover,g=top/in-resources/b368029c-a4dd-448a-a888-58348cb1b144/Images/ProductImages/Source/YNTS1716TURSE.jpg",
      name: "Yonex Mens Polo T-Shirt ",
      brand:"YONEX",
      type:"Clothing",
      color:"blue💙",
      price: 699,
      strikedoffprice: 999,
    },
    {
      image_url:
        "https:////storage.sg.content-cdn.io/cdn-cgi/image/width=500,height=500,quality=75,format=auto,fit=cover,g=top/in-resources/b368029c-a4dd-448a-a888-58348cb1b144/Images/ProductImages/Source/YNTS1717TUSEA.jpg",
      name: "Yonex Mens Polo T-Shirt ",
      brand:"YONEX",
      type:"Clothing",
      color:"blue💙",
      price: 1620,
      strikedoffprice: 3599,
    },
    {
      image_url:
        "https:////storage.sg.content-cdn.io/cdn-cgi/image/width=500,height=500,quality=75,format=auto,fit=cover,g=top/in-resources/b368029c-a4dd-448a-a888-58348cb1b144/Images/ProductImages/Source/YNTS1717PBL.jpg",
      name: "Yonex Mens Polo T-Shirt ",
      brand:"YONEX",
      type:"Clothing",
      color:"blue💙",
      price: 1620,
      strikedoffprice: 3599,
    },
    {
      image_url:
        "https:////storage.sg.content-cdn.io/cdn-cgi/image/width=500,height=500,quality=75,format=auto,fit=cover,g=top/in-resources/b368029c-a4dd-448a-a888-58348cb1b144/Images/ProductImages/Source/YNTS1721HRD.jpg",
      name: " Yonex Mens Round Neck T-Shirt",
      brand:"YONEX",
      type:"Clothing",
      color:"red💖",
      price: 599,
      strikedoffprice: 999,
    },
    {
      image_url:
        "https:////storage.sg.content-cdn.io/cdn-cgi/image/width=500,height=500,quality=75,format=auto,fit=cover,g=top/in-resources/b368029c-a4dd-448a-a888-58348cb1b144/Images/ProductImages/Source/YNTS171WH.jpg",
      name: "Yonex Mens Polo T-Shirt  ",
      brand:"YONEX",
      type:"Clothing",
      color:"white🤍",
      price: 1575,
      strikedoffprice: 3499,
    },
    {
      image_url:
        "https:////storage.sg.content-cdn.io/cdn-cgi/image/width=500,height=500,quality=75,format=auto,fit=cover,g=top/in-resources/b368029c-a4dd-448a-a888-58348cb1b144/Images/ProductImages/Source/YNTS1722TC.jpg",
      name: "Yonex Mens Polo T-Shirt  ",
      brand:"YONEX",
      type:"Clothing",
      color:"blue💙",
      price: 9999,
      strikedoffprice: 12000,
    },
    {
      image_url:
        "https:////storage.sg.content-cdn.io/cdn-cgi/image/width=500,height=500,quality=75,format=auto,fit=cover,g=top/in-resources/b368029c-a4dd-448a-a888-58348cb1b144/Images/ProductImages/Source/YNTS1722FLS.jpg ",
      name: " Yonex Mens Polo T-Shirt  ",
      brand:"YONEX",
      type:"Clothing",
      color:"blue💙",
      price: 779,
      strikedoffprice: 1299,
    },
    {
      image_url:
        "https:////storage.sg.content-cdn.io/cdn-cgi/image/width=500,height=500,quality=75,format=auto,fit=cover,g=top/in-resources/b368029c-a4dd-448a-a888-58348cb1b144/Images/ProductImages/Source/YNTS1722BLD.jpg",
      name: "Yonex Mens Polo T-Shirt  ",
      brand:"YONEX",
      type:"Clothing",
      color:"blue💙",
      price: 1019,
      strikedoffprice: 1699,
    },
    {
      image_url:
        "https:////storage.sg.content-cdn.io/cdn-cgi/image/width=500,height=500,quality=75,format=auto,fit=cover,g=top/in-resources/b368029c-a4dd-448a-a888-58348cb1b144/Images/ProductImages/Source/YNTS1722BRWH.jpg ",
      name: " Yonex Mens Polo T-Shirt  ",
      brand:"YONEX",
      type:"Clothing",
      color:"white🤍",
      price: 1019,
      strikedoffprice: 1699,
    },
    {
      image_url:
        " https:////storage.sg.content-cdn.io/cdn-cgi/image/width=500,height=500,quality=75,format=auto,fit=cover,g=top/in-resources/b368029c-a4dd-448a-a888-58348cb1b144/Images/ProductImages/Source/YNTS1715ATL.jpg",
      name: "Yonex Mens Polo T-Shirt  ",
      brand:"YONEX",
      type:"Clothing",
      color:"blue💙",
      price: 1575,
      strikedoffprice: 3499,
    },
    {
      image_url:
        "https:////storage.sg.content-cdn.io/cdn-cgi/image/width=500,height=500,quality=75,format=auto,fit=cover,g=top/in-resources/b368029c-a4dd-448a-a888-58348cb1b144/Images/ProductImages/Source/YNTS1715PB.jpg ",
      name: " Yonex Mens Polo T-Shirt  ",
      brand:"YONEX",
      type:"Clothing",
      color:"blue💙",
      price: 3499,
      strikedoffprice: 4999,
    },
    {
      image_url:
        " https:////storage.sg.content-cdn.io/cdn-cgi/image/width=500,height=500,quality=75,format=auto,fit=cover,g=top/in-resources/b368029c-a4dd-448a-a888-58348cb1b144/Images/ProductImages/Source/YNTS1715JBK.jpg ",
      name: "  Yonex Mens Polo T-Shirt  ",
      brand:"YONEX",
      type:"Clothing",
      color:"black🖤",
      price: 749,
      strikedoffprice: 1499,
    },
    {
      image_url:
        " https:////storage.sg.content-cdn.io/cdn-cgi/image/width=500,height=500,quality=75,format=auto,fit=cover,g=top/in-resources/b368029c-a4dd-448a-a888-58348cb1b144/Images/ProductImages/Source/YNTS1719PB.jpg ",
      name: "  Yonex Mens Polo T-Shirt  ",
      brand:"YONEX",
      type:"Clothing",
      color:"blue💙",
      price: 1149,
      strikedoffprice: 2299,
    },
    {
      image_url:
        " https:////storage.sg.content-cdn.io/cdn-cgi/image/width=500,height=500,quality=75,format=auto,fit=cover,g=top/in-resources/b368029c-a4dd-448a-a888-58348cb1b144/Images/ProductImages/Source/KBSKNFTBSLYR.jpg ",
      name: " Kookaburra Skin Fit Base Layer (Black)",
      brand:"Kookaburra",
      type:"Clothing",
      color:"black🖤",
      price: 1620,
      strikedoffprice: 3599,
    },
    {
      image_url:
        " https:////storage.sg.content-cdn.io/cdn-cgi/image/width=500,height=500,quality=75,format=auto,fit=cover,g=top/in-resources/b368029c-a4dd-448a-a888-58348cb1b144/Images/ProductImages/Source/YNMSH1574JBK.jpg ",
      name: " Yonex Mens Badminton Short   ",
      brand:"YONEX",
      type:"Clothing",
      color:"black🖤",
      price: 779,
      strikedoffprice: 1299,
    },
    {
      image_url:
        "https:////storage.sg.content-cdn.io/cdn-cgi/image/width=500,height=500,quality=75,format=auto,fit=cover,g=top/in-resources/b368029c-a4dd-448a-a888-58348cb1b144/Images/ProductImages/Source/YNMSH1735JBK.jpg",
      name: "  Yonex Mens Badminton Short  ",
      brand:"YONEX",
      type:"Clothing",
      color:"black🖤",
      price: 3499,
      strikedoffprice: 4999,
    },
    {
      image_url:
        " https:////storage.sg.content-cdn.io/cdn-cgi/image/width=500,height=500,quality=75,format=auto,fit=cover,g=top/in-resources/b368029c-a4dd-448a-a888-58348cb1b144/Images/ProductImages/Source/YNMSH1735TSEA.jpg",
      name: "Yonex Mens Badminton Short  ",
      brand:"YONEX",
      type:"Clothing",
      color:"blue💙",
      price: 3499,
      strikedoffprice: 4999,
    },
    {
      image_url:
        " https:////storage.sg.content-cdn.io/cdn-cgi/image/width=500,height=500,quality=75,format=auto,fit=cover,g=top/in-resources/b368029c-a4dd-448a-a888-58348cb1b144/Images/ProductImages/Source/YN50107AEXGRN.jpg ",
      name: " Yonex Badminton Warm Up Jacket (Green -50107AEX) ",
      brand:"YONEX",
      type:"Clothing",
      color:"green💚",
      price: 1399,
      strikedoffprice: 2799,
    },
    
    {
      image_url:
        "https:////storage.sg.content-cdn.io/cdn-cgi/image/width=500,height=500,quality=75,format=auto,fit=cover,g=top/in-resources/b368029c-a4dd-448a-a888-58348cb1b144/Images/ProductImages/Source/YNMTS1536TRS.jpg",
      name: "Yonex Mens Shorts",
      brand:"YONEX",
      type:"Clothing",
      color:"red💖",
      price: 3919,
      strikedoffprice: 5599,
    },
    {
      image_url:
        "https:////storage.sg.content-cdn.io/cdn-cgi/image/width=500,height=500,quality=75,format=auto,fit=cover,g=top/in-resources/b368029c-a4dd-448a-a888-58348cb1b144/Images/ProductImages/Source/YNMTS1005NPCRQ.jpg",
      name: "Yonex Mens Round Neck T-Shirt",
      brand:"YONEX",
      type:"Clothing",
      color:"blue💙",
      price: 1620,
      strikedoffprice: 3599,
    },
    {
      image_url:
        "https:////storage.sg.content-cdn.io/cdn-cgi/image/width=500,height=500,quality=75,format=auto,fit=cover,g=top/in-resources/b368029c-a4dd-448a-a888-58348cb1b144/Images/ProductImages/Source/YNMTS1005RWBLY.jpg",
      name: "Yonex Mens Round Neck T-Shirt",
      brand:"YONEX",
      type:"Clothing",
      color:"black🖤",
      price: 1620,
      strikedoffprice: 3599,
    },
    {
      image_url:
        "https:////storage.sg.content-cdn.io/cdn-cgi/image/width=500,height=500,quality=75,format=auto,fit=cover,g=top/in-resources/b368029c-a4dd-448a-a888-58348cb1b144/Images/ProductImages/Source/YNMTS1445TSFR.jpg",
      name: "Yonex Mens Round Neck T-Shirt",
      brand:"YONEX",
      type:"Clothing",
      color:"red💖",
      price: 7599,
      strikedoffprice: 9999,
    },
    {
      image_url:
        "https:////storage.sg.content-cdn.io/cdn-cgi/image/width=500,height=500,quality=75,format=auto,fit=cover,g=top/in-resources/b368029c-a4dd-448a-a888-58348cb1b144/Images/ProductImages/Source/YNMTS1445FRGF.jpg",
      name: "Yonex Mens Round Neck T-Shirt",
      brand:"YONEX",
      type:"Clothing",
      color:"blue💙",
      price: 909,
      strikedoffprice: 1299,
    },
    {
      image_url:
        "https:////storage.sg.content-cdn.io/cdn-cgi/image/width=500,height=500,quality=75,format=auto,fit=cover,g=top/in-resources/b368029c-a4dd-448a-a888-58348cb1b144/Images/ProductImages/Source/YNMTS1536BYL.jpg",
      name: "Yonex Mens Round Neck T-Shirt",
      brand:"YONEX",
      type:"Clothing",
      color:"blue💙",
      price: 779,
      strikedoffprice: 1299,
    },
    {
      image_url:
        "https:////storage.sg.content-cdn.io/cdn-cgi/image/width=500,height=500,quality=75,format=auto,fit=cover,g=top/in-resources/b368029c-a4dd-448a-a888-58348cb1b144/Images/ProductImages/Source/YNMTS1536FRD.jpg",
      name: " Yonex Mens Round Neck T-Shirt",
      brand:"YONEX",
      type:"Clothing",
      color:"black🖤",
      color: "",
      price: 1749,
      strikedoffprice: 2499,
    },
    {
      image_url:
        "https:////storage.sg.content-cdn.io/cdn-cgi/image/width=500,height=500,quality=75,format=auto,fit=cover,g=top/in-resources/b368029c-a4dd-448a-a888-58348cb1b144/Images/ProductImages/Source/YNMTS1536SC.jpg",
      name: "Yonex Mens Round Neck T-Shirt",
      brand:"YONEX",
      type:"Clothing",
      color:"blue💙",
      price: 1079,
      strikedoffprice: 1799,
    },
    {
      image_url:
        "https://storage.sg.content-cdn.io/cdn-cgi/image/%7Bwidth%7D,%7Bheight%7D,quality=75,format=auto,fit=cover,g=top/in-resources/b368029c-a4dd-448a-a888-58348cb1b144/Images/ProductImages/Source/NK852691-100.jpg",
      name: "NIKE ALPHA ACCELERATE 3 CRICKET SHOES",
      brand:"NIKE",
      type:"Shoes",
      color:"blue💙",
      price: 8999,
      strikedoffprice: "11995",
    },
    {
      image_url:
        "https://storage.sg.content-cdn.io/cdn-cgi/image/%7Bwidth%7D,%7Bheight%7D,quality=75,format=auto,fit=cover,g=top/in-resources/b368029c-a4dd-448a-a888-58348cb1b144/Images/ProductImages/Source/AS1011B338401.jpg",
      name: "ASICS GEL EXCITE 9 RUNNING SHOES",
      brand:"ASICS",
      type:"Shoes",
      color:"blue💙",
      price: 5849,
      strikedoffprice: "6499",
    },
    {
      image_url:
        "https://storage.sg.content-cdn.io/cdn-cgi/image/%7Bwidth%7D,%7Bheight%7D,quality=75,format=auto,fit=cover,g=top/in-resources/b368029c-a4dd-448a-a888-58348cb1b144/Images/ProductImages/Source/A1011A823006.jpg",
      name: "ASICS PATRIOT 12 MENS RUNNING SHOES",
      brand:"ASICS",
      type:"Shoes",
      color:"orange🧡",
      price: 4049,
      strikedoffprice: "4,499",
    },
    {
      image_url:
        "https://storage.sg.content-cdn.io/cdn-cgi/image/%7Bwidth%7D,%7Bheight%7D,quality=75,format=auto,fit=cover,g=top/in-resources/b368029c-a4dd-448a-a888-58348cb1b144/Images/ProductImages/Source/AS1022A115300.jpg",
      name: "ASICS GEL QUANTUM 90 RUNNING SHOES",
      brand:"ASICS",
      type:"Shoes",
      color:"teal💜",
      price: 3999,
      strikedoffprice: "5,499",
    },
    {
      image_url:
        "https://storage.sg.content-cdn.io/cdn-cgi/image/%7Bwidth%7D,%7Bheight%7D,quality=75,format=auto,fit=cover,g=top/in-resources/b368029c-a4dd-448a-a888-58348cb1b144/Images/ProductImages/Source/ADRSS45088.jpg",
      name: "ADIDAS ALCOR 1.0 MEN'S RUNNING SHOES",
      brand:"ADIDAS",
      type:"Shoes",
      color:"black🖤",
      price: 5849,
      strikedoffprice: "6499",
    },
    {
      image_url:
        "https://storage.sg.content-cdn.io/cdn-cgi/image/%7Bwidth%7D,%7Bheight%7D,quality=75,format=auto,fit=cover,g=top/in-resources/b368029c-a4dd-448a-a888-58348cb1b144/Images/ProductImages/Source/ADRSS45125L.jpg",
      name: "ADIDAS LITE PRIMO RUNNING SHOES",
      brand:"ADIDAS",
      type:"Shoes",
      color:"white🤍",
      price: 2449,
      strikedoffprice: "3,499",
    },
    {
      image_url:
        "https://storage.sg.content-cdn.io/cdn-cgi/image/%7Bwidth%7D,%7Bheight%7D,quality=75,format=auto,fit=cover,g=top/in-resources/b368029c-a4dd-448a-a888-58348cb1b144/Images/ProductImages/Source/ADRSAF2998L.jpg",
      name: "ADIDAS MARLIN 4.0 MEN'S RUNNING SHOES",
      brand:"ADIDAS",
      type:"Shoes",
      color:"green💚",
      price: 2599,
      strikedoffprice: "3,999",
    },

    {
      image_url:
        "https://storage.sg.content-cdn.io/cdn-cgi/image/%7Bwidth%7D,%7Bheight%7D,quality=75,format=auto,fit=cover,g=top/in-resources/b368029c-a4dd-448a-a888-58348cb1b144/Images/ProductImages/Source/NK704889-016L.jpg",
      name: "NIKE DUAL FUSION 6 TRAINING SHOES",
      brand:"NIKE",
      type:"Shoes",
      color:"black🖤",
      price: 4549,
      strikedoffprice: "6499",
    },
    {
      image_url:
        "https://storage.sg.content-cdn.io/cdn-cgi/image/%7Bwidth%7D,%7Bheight%7D,quality=75,format=auto,fit=cover,g=top/in-resources/b368029c-a4dd-448a-a888-58348cb1b144/Images/ProductImages/Source/NK831568-002.jpg",
      name: "NIKE FLEX TRAIN AVER RUNNING SHOES",
      brand:"NIKE",
      type:"Shoes",
      color:"green💚",
      price: 4899,
      strikedoffprice: "6,995",
    },
    {
      image_url:
        "https://storage.sg.content-cdn.io/cdn-cgi/image/%7Bwidth%7D,%7Bheight%7D,quality=75,format=auto,fit=cover,g=top/in-resources/b368029c-a4dd-448a-a888-58348cb1b144/Images/ProductImages/Source/ASCRP502Y0199.jpg",
      name: "PUMA GEL 100 NOT OUT CRICKET SHOES",
      brand:"PUMA",
      type:"Shoes",
      color:"blue💙",
      price: 5849,
      strikedoffprice: "6499",
    },

    {
      image_url:
        "https://storage.sg.content-cdn.io/cdn-cgi/image/%7Bwidth%7D,%7Bheight%7D,quality=75,format=auto,fit=cover,g=top/in-resources/b368029c-a4dd-448a-a888-58348cb1b144/Images/ProductImages/Source/PMCSH10556507.jpg",
      name: "PUMA 19 FH RUBBER SPIKE CRICKET SHOES",
      brand:"PUMA",
      type:"Shoes",
      color:"white🤍",
      price: 4125,
      strikedoffprice: "5,499",
    },
    {
      image_url:
        "https://storage.sg.content-cdn.io/cdn-cgi/image/%7Bwidth%7D,%7Bheight%7D,quality=75,format=auto,fit=cover,g=top/in-resources/b368029c-a4dd-448a-a888-58348cb1b144/Images/ProductImages/Source/DSCJRCRSPRM.jpg",
      name: "DSC PREMIUM CRICKET SET",
      brand:"DSC",
      type:"Cricket",
      color:"white🤍",
      price: 6299,
      strikedoffprice: "8,995",
    },
    {
      image_url:"https://storage.sg.content-cdn.io/cdn-cgi/image/%7Bwidth%7D,%7Bheight%7D,quality=75,format=auto,fit=cover,g=top/in-resources/b368029c-a4dd-448a-a888-58348cb1b144/Images/ProductImages/Source/GMCRSTCatalyst_L1.jpg",
      name: "GM CATALYST CRICKET SET",
      brand:"GM",
      type:"Cricket",
      color:"white🤍",
      price: 4525,
      strikedoffprice: "8,995",
    },
    {
      image_url:
        "https://storage.sg.content-cdn.io/cdn-cgi/image/%7Bwidth%7D,%7Bheight%7D,quality=75,format=auto,fit=cover,g=top/in-resources/b368029c-a4dd-448a-a888-58348cb1b144/Images/ProductImages/Source/GMCRSTIcon_L1.jpg",
      name: "GM ICON CRICKET SET",
      brand:"GM",
      type:"Cricket",
      color:"white🤍",
      price: 3249,
      strikedoffprice: "8,995",
    },
    {
      image_url:
        "https://storage.sg.content-cdn.io/cdn-cgi/image/width=780,height=780,quality=75,format=auto/in-resources/b368029c-a4dd-448a-a888-58348cb1b144/Images/ProductImages/Source/SSBLYorker_L1.jpg",
      name: "SS YORKER CRICKET BALL",
      brand:"SS",
      type:"Cricket",
      color:"red💖",
      price: 2190,
      strikedoffprice: "2,580",
    },
    {
      image_url:
        "https://storage.sg.content-cdn.io/cdn-cgi/image/width=780,height=780,quality=75,format=auto/in-resources/b368029c-a4dd-448a-a888-58348cb1b144/Images/ProductImages/Source/KBCKBLSPEEDWH.jpg",
      name: "KOOKABURRA SPEED CRICKET BALL (WHITE)",
      brand:"KOOKABURRA",
      type:"Cricket",
      color:"white🤍",
      price: 879,
      strikedoffprice: "899",
    },
  ];

  var cartdata=JSON.parse(localStorage.getItem("SportsJamCart"))||[]
  clothsData.map(function(elem){
      var box=document.createElement("div");
      box.setAttribute("class","box1")
      var box2=document.createElement("div");
      box2.setAttribute("class","box2");
      var img=document.createElement("img");
      img.src=elem.image_url;
      var brand=document.createElement("h4");
      brand.innerText=elem.brand;
      brand.setAttribute("class","brand");
      var type=document.createElement("h6");
      type.innerText=elem.type;
      type.setAttribute("class","ty");
      var color=document.createElement("p");
      color.innerText=elem.color;
      color.setAttribute("class","color");
      var name=document.createElement("p");
      name.textContent=elem.name;
      var price=document.createElement("p");
      // price.setAttribute("class","para");
      price.innerText=`₹ ${elem.price}`;
      var strikedoffprice=document.createElement("p");
      strikedoffprice.setAttribute("class","para");
      strikedoffprice.innerText=`₹ ${elem.strikedoffprice}`;
      var btn=document.createElement("img")
      btn.src="https://www.seekpng.com/png/detail/134-1344280_add-items-to-cart-minimalist-shopping-cart.png";
      btn.setAttribute("class","addtocart");
      btn.addEventListener("click",function(){
        addToCart(elem);
      });
      box.append(img,name,box2);
      box2.append(brand,type,color,price,strikedoffprice,btn);
      document.querySelector("#products").append(box);
      
  });

  function addToCart(elem){
    cartdata.push(elem);
    localStorage.setItem("SportsJamCart",JSON.stringify(cartdata));
    alert(" item Added to cart");
  }

  const btns =document.querySelectorAll(".btn");
  const products=document.querySelectorAll("#products");
  
  for(let i=0;i<btns.length;i++){
    btns[i].addEventListener("click",(e)=>{
      e.preventDefault();
      const filter=e.target.dataset.filter;
      console.log(filter);
      // console.log(t1);
      products.forEach((prod)=>{
        if(filter=="All"){
          prod.style.display="grid";
        }
        else{
          let box1=document.querySelectorAll(".box1");
          for(let j=0;j<box1.length;j++){
            let t1=box1[j].querySelector(".ty");
            if(t1.innerHTML.indexOf(filter)>-1){
              console.log("TRUPTI");
              console.log(t1);
              box1[j].style.display="grid";
            }else{
              box1[j].style.display="none";
            }
          }
          
        }
      });
    });
  }

  const colrs=document.querySelectorAll(".colr");
  for(let k=0;k<colrs.length;k++){
    colrs[k].addEventListener("change",(e)=>{
      e.preventDefault();
      const filter1=e.target.dataset.filter;
      console.log(filter1);
      products.forEach((prod)=>{
        if(filter1=="All"){
          prod.style.display="grid";
        }else{
          let box1=document.querySelectorAll(".box1");
          for(let a=0;a<box1.length;a++){
            let c1=box1[a].querySelector(".color");
            if(c1.innerHTML.indexOf(filter1)>-1){
              console.log(c1);
              box1[a].style.display="grid";
            }else{
              box1[a].style.display="none";
            }
          }
        }
        
      });
    });
  }

  const brands=document.querySelectorAll(".brands");
  for(let k=0;k<brands.length;k++){
    brands[k].addEventListener("change",(e)=>{
      e.preventDefault();
      const filter2=e.target.dataset.filter;
      console.log(filter2);
      products.forEach((prod)=>{
        if(filter2=="All"){
          prod.style.display="grid";
        }else{
          let box1=document.querySelectorAll(".box1");
          for(let a=0;a<box1.length;a++){
            let b1=box1[a].querySelector(".brand");
            if(b1.innerHTML.indexOf(filter2)>-1){
              console.log(b1);
              box1[a].style.display="grid";
            }else{
              box1[a].style.display="none";
            }
          }
        }
        
      });
    });
  }