function navbar() {
  return `<div id="title">
      <div>
          <h4>Free shipping over $89, or shop online and pick up select orders at a Nordstrom Rack or Nordstrom store.  <a href="#">Learn More</a>
      </div>
      <div>
          <h3></h3>
      </div>
  </div>
  <div id="navbar">
      <div id="sLogo">
      <a href="index.html"> <img src="/Image/nordstrom-rack-logo.png" alt="logo"></a>
     
      </div>
      <div>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLS3SsGCqKLccokl5vCOakU4Lb5YItCxASZg&usqp=CAU"
              alt="logo">
          <input type="search" placeholder="Search for products or brands">
      </div>
      <div>
          <div>
              <div>
                  <p id="uName">Sign In</p>
              </div>
              <img src="https://icons-for-free.com/download-icon-arrows+bottom+chevron+direction+down+icon-1320085938044424744_512.png"
                  alt="icon">
              <div class="content">
                  <div>
                      <a href="signup.html">
                          <p>Sign In | Create Account</p>
                      </a>
                  </div>
                  <div>
                      <a href="https:www.google.com">
                          <p>Your Account</p>
                      </a>
                  </div>
                  <div>
                      <a href="https:www.google.com">
                          <p>Purchases</p>
                      </a>
                  </div>
                  <div>
                      <a href="https:www.google.com">
                          <p>Wish List</p>
                      </a>
                  </div>
                  <div>
                      <a href="https:www.google.com">
                          <p>The Nordy Club Rewards</p>
                      </a>
                  </div>
                  <div>
                      <a href="https:www.google.com">
                          <p>Shipping Addresses</p>
                      </a>
                  </div>
                  <div>
                      <a href="https:www.google.com">
                          <p>Payment Methods</p>
                      </a>
                  </div>
                  <div>
                      <a href="https:www.google.com">
                          <p>Looks</p>
                      </a>
                  </div>
                  <div>
                      <a href="https:www.google.com">
                          <p>Pay & Manage Nordstrom Card</p>
                      </a>
                  </div>
                  <div>
                      <a href="https:www.google.com">
                          <p>Account Settings</p>
                      </a>
                  </div>
                  <div>
                      <a href="https:www.google.com">
                          <p>Password & Personal Info</p>
                      </a>
                  </div>
                  <div>
                      <a href="https:www.google.com">
                          <p>Email & Mail Preferences</p>
                      </a>
                  </div>
                  <div>
                      <a href="https:www.google.com">
                          <p>Stores & Events</p>
                      </a>
                  </div>
              </div>
          </div>
          <div>
              <div>
                  <a href="cart.html"><img src="http://cdn.onlinewebfonts.com/svg/img_343947.png" alt="cart"></a>
              </div>
          </div>
      </div>
  </div>
  <hr>
  <div id="dropdown">
      <div>
          <p>Clearance</p>
      </div>
      <div>
          <a href="women.html">
              <p>Women</p>
          </a>
      </div>
      <div>
          <a href="mens.html">
              <p>Men</p>
          </a>
      </div>
      <div>
      <a href="kids.html">
        <p>kids</p>
      </a>
      </div>
      <div>
      <a href="shoes.html">
        <p>Shoes</p>
      </a>
      </div>
      <div>
      <a href="activewear.html">
          <p>Activewear</p>
          </a>
      </div>
      <div>
      <a href="bag&acessories.html">
        <p>Bags & Accessories</p>
      </a>
      </div>
      <div>
          <p>Home</p>
      </div>
      <div>
          <p>Beauty</p>
      </div>
      <div>
          <p>Gifts</p>
      </div>
      <div>
          <p>Flash Events</p>
      </div>
  </div>`;
}

let append = (data, card) => {
  data.forEach((el) => {
    let image = document.createElement("img");
    image.setAttribute("class", "image");
    image.src = el.img;

    let brand = document.createElement("h5");
    brand.innerText = el.brandName;

    let sub = document.createElement("p");
    sub.setAttribute("class", "type");
    sub.innerText = el.type;

    let div1 = document.createElement("div");
    div1.setAttribute("class", "prc");
    div1.style.display = "flex";

    let span1 = document.createElement("span");
    span1.setAttribute("class", "span1");
    span1.innerText = el.price;

    let span2 = document.createElement("span");
    span2.setAttribute("class", "span2");
    span2.innerText = el.off;

    div1.append(span1, span2);

    let cst = document.createElement("p");
    cst.setAttribute("class", "cst");
    cst.innerText = el.cost;

    let shp = document.createElement("p");
    shp.setAttribute("class", "shp");
    shp.innerText = el.ship;

    let div = document.createElement("div");

    div.onclick = () => {
      add(el);
    };
    div.append(image, brand, sub, div1, cst, shp);
    card.append(div);
  });
};

// let add=(el)=>{

//    let addtocart=JSON.parse(localStorage.getItem("add"))||[];
//     addtocart.push(el);
//     localStorage.setItem("add",JSON.stringify(addtocart))
//     console.log(el)

// }

export { navbar, append };
