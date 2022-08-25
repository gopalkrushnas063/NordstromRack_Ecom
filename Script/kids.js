import { navbar} from "../components/navbar.js";

document.getElementById("navbar").innerHTML = navbar();

document.querySelector("body").style.backgroundColor = "whitesmoke";

let data = [
  {
    src: "https://n.nordstrommedia.com/id/sr3/7ed71c08-f04e-4797-b7e6-44d7e32d9731.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
    name: "Long Sleeve Jersey Footie & Hat Set (Baby)",
    price: "$64 (15% off)",
  },

  {
    src: "https://n.nordstrommedia.com/id/sr3/f3588ee9-e4ab-4625-abc4-db3c5521d89a.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
    name: "Kids' Faux Fur Coverall (Baby Boys)          ",
    price: "$44 (16% off)",
  },

  {
    src: "https://n.nordstrommedia.com/id/sr3/28dc83d1-3089-4d12-aebc-ce429fd37cd3.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
    name: "Glito",
    price: "$12 (26% off)",
  },

  {
    src: "https://n.nordstrommedia.com/id/sr3/76d9e992-3c1a-43fa-935a-a3e5d9a8c31c.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
    name: "Kids' Nordstrom Baby Print Footie (Baby)",
    price: "$214 (36% off)",
  },

  {
    src: "https://n.nordstrommedia.com/id/sr3/9ecf6f5b-d595-4f56-b090-ee650490601c.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
    name: "Kids' NORDSTROM RACK Joggers - Pack of 2 (Baby Boys)",
    price: "$34 (6% off)",
  },

  {
    src: "https://n.nordstrommedia.com/id/sr3/74744abe-b590-439c-8510-cd58a6524782.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
    name: "Velour Sweatsuit Set",
    price: "$13 (14% off)",
  },

  {
    src: "https://n.nordstrommedia.com/id/sr3/2b8ec591-1d5d-47b2-9197-7510a9d3d70b.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
    name: " Camo Print T-Shirt & Shorts Set",
    price: "$24 (16% off)",
  },

  {
    src: "https://n.nordstrommedia.com/id/sr3/252f9797-fd50-4ecf-a4d0-7148daa1afb7.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
    name: "  Kids' 3-Piece Koala Hoodie Set",
    price: "$12(16% off)",
  },

  {
    src: "https://n.nordstrommedia.com/id/sr3/d0e4e580-d1ff-488c-8b00-5df6c2a50b66.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
    name: "Fuzzy Bear Pram",
    price: "$23 (11% off)",
  },

  {
    src: "https://n.nordstrommedia.com/id/sr3/78903fe5-8130-42d3-bcc3-a89a6a17ad3a.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
    name: "Halloween Long Sleeve Bodysuit & Pants Set",
    price: "$24 (16% off)",
  },

  {
    src: "https://n.nordstrommedia.com/id/sr3/8b3a63a6-3781-4c77-a4b2-3a5b8bc8cbe9.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
    name: " Blues Tie Dye Coverall",
    price: "$29 (46% off)",
  },

  {
    src: "https://n.nordstrommedia.com/id/sr3/27ffd4a6-54f2-4f66-bc58-b103ce2d1891.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
    name: "Kids' Quilted Coverall",
    price: "$34 (16% off)",
  },

  {
    src: "https://n.nordstrommedia.com/id/sr3/d6e2f947-87d5-4781-a7b3-a9bdd3b9dd5b.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
    name: "T-Rex Cotton Graphic Sweatshirt & Pants Set",
    price: "$13 (16% off)",
  },

  {
    src: "https://n.nordstrommedia.com/id/sr3/55d3dce9-eae8-411f-973b-555f08aa78e4.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
    name: "Adidas",
    price: "$34 (16% off)",
  },

  {
    src: "https://n.nordstrommedia.com/id/sr3/27baf2a2-e98f-4a3d-97db-cc245b96d156.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
    name: "All Day Play Hooded Coverall (Baby Boys 0-",
    price: "$44 (16% off)",
  },
];

data.forEach(function (el) {
  let div = document.createElement("div");
  let image = document.createElement("img");
  image.src = el.src;

  let name = document.createElement("p");
  name.innerText = el.name;

  let price = document.createElement("h4");
  price.innerText = el.price;

  document.querySelector("#main").append(div);
  div.append(image, name, price);
});
