
// navbar



// sidebar

function sidebar(){
    return `
    <div class="categoryMenu02_030">
    <h4 class="category">CATEGORY MENU</h4>
    <div class="filter-box">
        <a href="">   </a> <br> <a href="">   </a><br> <a href="">   </a>
        <a href="" class="btn active" data-filter="All">All</a> <br>
        <a href="" class="btn"  data-filter="Clothing">Clothing</a> <br>
        <a href="" class="btn" data-filter="Shoes">Shoes</a>  <br>
        <a href="" class="btn" data-filter="Cricket">Cricket</a> <br>
        <a href="" class="btn" data-filter="">Tennis</a> <br>
        <a href="" class="btn" data-filter="">Fitness</a> <br>
        <a href="" class="btn" data-filter="">Football</a> <br>
        <a href="" class="btn" data-filter="">Badminton</a> <br>
        
        
    </div>

    </div>
    <div id="searchby">
        <h4 class="sb">SEARCH BY</h4>
        <div class="brand">Brand
            <div id="open">+</div>
        </div>
        <div id="brandItems">
            <div id="close">-</div>
            <input type="checkbox" class="brands" data-filter="NIKE">NIKE <br>
            <input type="checkbox" class="brands" data-filter="PUMA">PUMA <br>
            <input type="checkbox" class="brands" data-filter="ADIDAS">ADIDAS <br>
            <input type="checkbox" class="brands" data-filter="SS">SS <br>
            <input type="checkbox" class="brands" data-filter="GM">GM  <br>
            <input type="checkbox" class="brands" data-filter="KOOKABURRA">KOOKABURRA <br>
            <input type="checkbox" class="brands" data-filter="DSC">DSC <br>
            <input type="checkbox" class="brands" data-filter="ASICS">ASICS <br>
            <input type="checkbox" class="brands" data-filter="YONEX">YONEX <br>

        </div>
    
        <div class="brand">Gender
            <div id="open1">+</div>
        </div>
        <div id="brandItems1">
            <div id="close1">-</div>
            <input type="checkbox">MEN <br>
            <input type="checkbox">WOMEN <br>
        
        </div>
    
        <div class="brand">Color
            <div id="open2">+</div>
        </div>
        <div id="brandItems2">
            <div id="close2">-</div>
            <input type="checkbox" class="colr" data-filter="blue💙">blue💙 <br>
            <input type="checkbox" class="colr" data-filter="red💖">red💖 <br>
            <input type="checkbox" class="colr" data-filter="white🤍">white🤍<br>
            <input type="checkbox" class="colr" data-filter="black🖤">black🖤 <br>
            <input type="checkbox" class="colr" data-filter="green💚">green💚 <br>
            <input type="checkbox" class="colr" data-filter="orange🧡">orange🧡 <br>
            <input type="checkbox" class="colr" data-filter="yellow💛">yellow💛 <br>
            
        </div>

    </div>  
    `;
};

function itemtop(){
    return `
        <p>Products</p>
        <div class="grid">
            <p>SHOW</p>
            <a class="grid3" href="">3</a>
            <a class="grid4" href="">4</a>
        </div>
        <select name="sort" id="sort02_030">
            <option value="">SORT BY</option>
            <option value="lth">Price Low to High</option>
            <option value="htl">Price High to Low</option>
        </select>  
    `;
};

export {sidebar, itemtop};