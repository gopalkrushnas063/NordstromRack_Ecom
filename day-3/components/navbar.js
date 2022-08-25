function navbar() {
  return `<p id="ptag">Free shipping over $89, or shop online and pick up select orders at a Nordstrom Rack or Nordstrom
    store. <a href="">Learn More</a></p>
<div id="navbar_upper">

    <div id="logo">
        <a href=""><img
                src="https://duoshouus.com/wp-content/uploads/2021/01/duoshou-2021-01-15_09-10-00_752.jpg"
                alt=""></a>
    </div>
    <div id="input_div">
    <i class="fa fa-search" style="font-size:24px"></i><input id="search" type="text" placeholder="Search for products or brands">
    </div>
    <div id="signup_div">
        <a href="signup.html">Sign In  <span id="down_arr">&#709;</span></a>
        <div id="bag_img">
        <a href="/cart.html"><i class="fa fa-shopping-bag" style="font-size:45px" aria-hidden="true"></i>
        </a>
            
        </div>
    </div>




</div>
<div id="navbar_bottom">
    <div>
        <a href="">Clearance</a>
        <a href="">Women</a>
        <a href="">Men</a>
        <a href="">Kids</a>
        <a href="">Shoes</a>
        <a href="">Activewear</a>
        <a href="">Bag&Accessories</a>
        <a href="">Home</a>
        <a href="">Beauty</a>
        <a href="">Gifts</a>
        <a href="">Flash Events</a>
    </div>

</div>`;
}

let append =(data,card) =>{
    data.forEach((el) => {
        
        let image=document.createElement("img")
        image.setAttribute("class","image")
        image.src=el.img;

        let brand=document.createElement("h5")
        brand.innerText=el.brandName;

        let sub=document.createElement("p")
        sub.setAttribute("class","type")
        sub.innerText=el.type;

        let div1=document.createElement("div");
        div1.setAttribute("class","prc")
        div1.style.display="flex";

        let span1=document.createElement("span")
        span1.setAttribute("class","span1")
        span1.innerText=el.price;

        let span2=document.createElement("span")
        span2.setAttribute("class","span2")
        span2.innerText=el.off;

        div1.append(span1,span2)

        let cst=document.createElement("p")
        cst.setAttribute("class","cst")
        cst.innerText=el.cost;

        let shp=document.createElement("p")
        shp.setAttribute("class","shp")
        shp.innerText=el.ship

        let div=document.createElement("div")
        
        div.onclick=()=>{
            add(el)
            
        }
        div.append(image,brand,sub,div1,cst,shp)
        card.append(div)
    });
}

// let add=(el)=>{

//    let addtocart=JSON.parse(localStorage.getItem("add"))||[];
//     addtocart.push(el);
//     localStorage.setItem("add",JSON.stringify(addtocart))
//     console.log(el)
    
// }

export {navbar,append};
