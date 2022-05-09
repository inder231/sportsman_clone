var x = JSON.parse(localStorage.getItem("data1")) || [];

console.log(x);

function appendItem(x) {
  document.getElementById("javascript_work").innerHTML=""
  x.map(function (elem, index) {

    var div1 = document.createElement("div");
    div1.setAttribute("id", "imagebox");

    var title = document.createElement("h3");
    title.innerText = elem.title;
    title.setAttribute("id", "imgTitle");

    var image1 = document.createElement("img");
    image1.src = elem.image;
    image1.setAttribute("id", "itemImage");

    var price = document.createElement("h3");
    price.innerText = `₹ ${elem.mrp}`;
    price.setAttribute("id", "imgPrice");

    var quantity = document.createElement("div");
    quantity.setAttribute("id", "imgPrice");
    quantity.className = "quan_css";

    //    ===============================

    var btnminus = document.createElement("button");
    btnminus.innerText = "-";
    btnminus.addEventListener("click", function () {
      decreaseQuant(index);
    });

    var p = document.createElement("p");
    p.innerText = elem.quant;
    p.className = "Rcount";
    p.setAttribute("id", "b");

    var btnplus = document.createElement("button");
    btnplus.innerText = "+";
    btnplus.className = "btn2";
    btnplus.addEventListener("click", function () {
      increaseQuant(index);
    });

    quantity.append(btnminus, p, btnplus);

    // =======================

    var total = document.createElement("h3");
    total.innerText=elem.mrp*elem.quant;
    total.setAttribute("id", "imgPrice");
    total.className="totalling";

    var div2 = document.createElement("div");
    div2.setAttribute("id", "imgPrice");

    var remove1 = document.createElement("button");
    remove1.innerText = "X";
    remove1.setAttribute("id", "removeButt");
    remove1.addEventListener("click", function () {

      deleteItem(index)
     
    });

    div2.append(remove1);
    div1.append(image1, title, price, quantity, total, div2);
    document.getElementById("javascript_work").append(div1);
  });
}



appendItem(x);
Total()

function increaseQuant(index) {
  x[index].quant++;

  console.log("ok1");
  localStorage.setItem("data1", JSON.stringify(x));
 
  appendItem(x)
  Total()

}

function decreaseQuant(index) {
  x[index].quant--;
  console.log("ok2");
  localStorage.setItem("data1", JSON.stringify(x));
  appendItem(x);
  Total()
  
}
function deleteItem(index){
  x.splice(index,1)
  localStorage.setItem("data1", JSON.stringify(x))
  appendItem(x)
  Total()

}

// ===========total function========================


// function subTotal() {
//   var cartTotal = x.reduce(function (acc, elem, index) {
//       return acc + ( elem.mrp * elem.quant);
//   }, 0);


//   document.getElementById("javaTotal").innerText=  "₹ "+cartTotal;
// }
// =========================================




function Total() {
  var cartTotal = x.reduce(function (acc, elem, index) {
      return acc + ( elem.mrp * elem.quant);
  }, 0);


  document.getElementById("javaTotal").innerText=  "₹ "+cartTotal;
  document.getElementById("javaAmount").innerText=  "₹ "+cartTotal;
}













  
// ===================================



