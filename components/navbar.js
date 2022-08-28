function navbar() {
  return `<div id="title">
      <div>
          <p>Take 40% off sandals! In stores & online thru Sept. 5. Selected styles only. Exclusions apply.<a href="#"><span style="text-decoration: underline">Shop now.</span></a></p>
      </div>
      <div>
          <h3></h3>
      </div>
  </div>
  <div id="navbar">
      <div id="sLogo">
      <a href="index.html"> <img src="/Image/nordstrom-rack-logo.png" alt="logo"></a>
     
      </div>
      <div class="input-container">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLS3SsGCqKLccokl5vCOakU4Lb5YItCxASZg&usqp=CAU"
        alt="">
      <input type="text" id="search_box" placeholder="Search for products and brands">
  
      <div class="hidden ">
      <div><a href="mens.html">Mens</a></div>
      <div><a href="women.html">Womens</a></div>
      <div><a href="home.html">Home</a></div>
      <div><a href="activewear.html">Activewear</a></div>
      <div><a href="bag&acessories.html">Bag&acessories</a></div>
      <div><a href="beauty.html">Beauty</a></div>
      <div><a href="shoes.html">Shoes</a></div>
      <div><a href="kids.html">Kids</a></div>
      <div><a href="gifts.html">Gifts</a></div>
      
      </div>
    </div>
      <div>
          <div>
              <div id="signpl">
                  <p id="uName">Sign In</p>
                  <img src="https://icons-for-free.com/download-icon-arrows+bottom+chevron+direction+down+icon-1320085938044424744_512.png"
                  alt="icon">
              </div>
              
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
        <p>Kids</p>
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
      <a href="home.html">
          <p>Home</p>
          </a>
      </div>
      <div>
        <a href="beauty.html">
          <p>Beauty</p>
        </a>
      </div>
      <div>
        <a href="gifts.html">
          <p>Gifts</p>
        </a>
      </div>
      <div>
          <p>Flash Events</p>
      </div>
  </div>`;
}

function renderSuggestion() {
  let search_box = document.getElementById('search_box')
  let suggestion_box = document.querySelector('.hidden')
  search_box.addEventListener('keydown', () => {
    if (search_box.value.length > 0) {
      suggestion_box.style.display = 'block'
    } else {
      suggestion_box.style.display = 'none'
    }
  })
}

let append = (data, card, renderItem) => {
  data.forEach((el) => {
    let image = document.createElement("img");
    image.setAttribute("class", "image");
    image.src = el.img;

    // let p = document.createElement('p')


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
      // renderItem()

      if (renderItem) renderItem()
      add(el);
    };

    div.append(image, brand, sub, div1, cst, shp);


    let quantity = document.createElement("div")
    quantity.setAttribute("id", "quant")
    let p = document.createElement('p')

    p.innerHTML = el.count || 0;
    quantity.append(p)
    card.append(div);

  });
};

let add = (el) => {
  let addtocart = JSON.parse(localStorage.getItem("add")) || [];
  //console.log(el, addtocart[0]);
  let index = addtocart.findIndex(ele => ele.brandName === el.brandName)
  if (index !== -1) {
    addtocart[index].count = addtocart[index].count + 1
  } else {
    el.count = 1
    addtocart.push(el)
  }


  console.log(addtocart)

  localStorage.setItem("add", JSON.stringify(addtocart))
  alert("Product Added to Your Cart Successfully")
  window.location.href = "cart.html"

}

function footer() {
  return `<div class="Get_Exclusive_offers">
    <img
      src="https://n.nordstrommedia.com/id/e63e8dd7-3537-47db-912c-7d370e63658f.jpeg?h=180&w=1600"
      alt=""
    />
    <div>
      Sign up and be first to know about flash events, new markdowns, private
      sales and <a href=""> Sign Up.</a>
    </div>
  </div>

  <div class="iam_whole_email_box_div">
    <div class="iam_child_divOf_email_div">
      <div><span>Get Email Updates:</span></div>
      <div><input type="text" placeholder="Email Adress" /></div>
      <div><button>Sign Up</button></div>
    </div>
  </div>

  <div class="iam_whole_footer_main_div">
    <div>
      <h3>Customer Service</h3>
      <a href="">Order Status</a>
      <a href="">Guest</a>
      <a href="">Returns</a>
      <a href="">Shipping & Return</a>
      <a href="">Policy</a>
      <a href="">Gift Cards</a>
      <a href="">FAQ</a>
      <a href="">Contact Us</a>
    </div>
    <div>
      <h3>About Us</h3>
      <a href="">About Our Brand</a>
      <a href="">The Nordy Club</a>
      <a href="">Store Locator</a>
      <a href="">All Brands</a>
      <a href="">Careers</a>
      <a href="">Get Email Updatess</a>
      <a href="">Nordstrom Blog</a>
      <a href="">Nordy Podcast</a>
    </div>
    <div>
      <h3>Nordstrom Rack & The Community</h3>
      <a href="">Corporate Social Responsibility</a>
      <a href="">Diversity, Inclusion & Belonging</a>
      <a href="">Shoes That Fit</a>
      <a href="">Big Brothers Big Sisters</a>
      <a href="">Donate Clothes</a>
    </div>
    <div>
      <h3>Nordstrom Card</h3>
      <a href="">Apply for a Nordstrom Card</a>
      <a href="">Pay My Bill</a>
      <a href="">Manage my Nordstrom Card</a>
    </div>
    <div>
      <h3>Nordstrom, Inc.</h3>
      <a href="">Nordstrom</a>
      <a href="">Nordstrom Canada </a>
      <a href="">HauteLook</a>
      <a href="">Investor Relations</a>
      <a href="">Press Releases</a>
      <a href="">Nordstrom Media Network</a>
    </div>
    <div>
      <div class="laptop_logo_div">
        <i class="fa-solid fa-laptop"></i>
        <a href="https://www.nordstromrack.com/promo/NordstromRackApp"
          >Download Our Apps</a
        >
      </div>

      <div class="soccial_media_logo_div">
        <a href="https://www.facebook.com/NordstromRack"
          ><i class="fa-brands fa-facebook"></i
        ></a>
        &nbsp;
        <a href="https://twitter.com/nordstromrack">
          <i class="fa-brands fa-twitter"></i
        ></a>
        &nbsp;
        <a href="https://in.pinterest.com/nordstromrack/"
          ><i class="fa-brands fa-pinterest"></i
        ></a>
        &nbsp;
        <a href="https://www.instagram.com/nordstromrack/">
          <i class="fa-brands fa-square-instagram"></i
        ></a>
      </div>
    </div>
    <div>
      <a href=""><i class="fa-solid fa-angle-up"></i></a>
      <a href="">Top</a>
    </div>
  </div>
  <div id="space"></div>
  <div class="footers_last_div">
    <div>
      <a href="">Privacy</a>
      <a href="">Do Not Sell My Personal Information</a>
      <a href="">Terms & Conditions</a>
      <a href="">Internet Based Ads</a>
      <a href="">California Supply Chain Act</a>
      <a href="">©2022 Nordstrom Rack</a>
    </div>
  </div>`
}


export { navbar, append, add, footer, renderSuggestion };
