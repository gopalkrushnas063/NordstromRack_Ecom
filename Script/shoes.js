import {navbar,append , footer, renderSuggestion} from "../components/navbar.js"

document.getElementById("navbarbody").innerHTML=navbar()
renderSuggestion()

document.getElementById("footerbar").innerHTML=footer()

document.querySelector("body").style.backgroundColor = "whitesmoke"


let data = [



    {
        src: "https://n.nordstrommedia.com/id/sr3/6bb86500-c977-4528-be2c-91ee20e25519.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
        name: "Clifton Edge Running Shoe",
        price: "$64 (15% off)",

    },



    {
        src: "https://n.nordstrommedia.com/id/sr3/ca59af61-f901-4d58-a2a3-3761585bce2c.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
        name: "Revolution 6 Next Nature Road Running Shoe",
        price: "$44 (16% off)",

    },


    {
        src: "https://n.nordstrommedia.com/id/sr3/da0ef2c1-7061-4ad3-83c7-a1ab2b72d142.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
        name: "Nike Air Max SC Sneaker (Men)",
        price: "$12 (26% off)",

    },





    {
        src: "https://n.nordstrommedia.com/id/sr3/d08d1eba-dc38-468e-a544-8243a27de74a.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
        name: "Grand Crosscourt Premier Sneaker COLE HAAN",
        price: "$214 (36% off)",

    },



    {
        src: "https://n.nordstrommedia.com/id/sr3/8081964c-4ec4-415e-8204-c7bff08dc089.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
        name:" Recycled Leather Low Top Sneaker KARL LAGERFELD PARIS",
        price: "$34 (6% off)",

    },


    {
        src: "https://n.nordstrommedia.com/id/sr3/f617b017-2acd-418f-93cd-7af5b9f78adb.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
        name: "Lite Racer Lace-up Activewear Sneaker ADIDAS",
        price: "$13 (14% off)",

    },


    {
        src: "https://n.nordstrommedia.com/id/sr3/68e8fadc-4997-45c0-a3ac-77f4b1e173c6.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
        name: " GrandPro Rally Canvas Court Sneaker COLE HAAN",
        price: "$24 (16% off)",

    },


    {
        src: "https://n.nordstrommedia.com/id/sr3/93082e0c-1940-4568-bf1b-be838a159fb0.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
        name: " Karl Head Sneaker KARL LAGERFELD PARIS",
        price: "$12(16% off)",

    },


    {
        src: "https://n.nordstrommedia.com/id/sr3/5a9dfe95-81d3-4010-bca7-e26bf6a10b1b.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
        name: "515 Classic Running Sneaker NEW BALANCE",
        price: "$23 (11% off)",

    },


    {
        src: "https://n.nordstrommedia.com/id/sr3/1904f3fc-7664-4420-94cc-4b0a493442df.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
        name: "Grand Court 2.0 Sneaker ADIDAS",
        price: "$24 (16% off)",

    },


    {
        src: "https://n.nordstrommedia.com/id/sr3/5843ef44-f58b-42dc-9059-c7fcdbd9dad7.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
        name: "Born Ashram II Lace-Up Sneaker BØRN",
        price: "$29 (46% off)",

    },


    {
        src: "https://n.nordstrommedia.com/id/sr3/ab57a760-d112-4f3d-bef8-8705aebbbe39.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
        name: "Electron 2.0 Open Road Athletic Sneaker PUMA",
        price: "$34 (16% off)",

    },


    {
        src: "https://n.nordstrommedia.com/id/sr3/b2711f6f-b11d-46f8-8112-1406a1fc6ce5.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
        name: "Court Legacy Sneaker NIKE",
        price: "$13 (16% off)",

    },

    {
        src: "https://n.nordstrommedia.com/id/sr3/67d3b0a6-6ab3-4b9f-be0b-35f8adf32ab6.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
        name: "Brecon Signature Sneaker TOMMY HILFIGER",
        price: "$34 (16% off)",

    },


    {
        src: "https://n.nordstrommedia.com/id/sr3/ce6b565b-0879-4b39-9879-c1106bf9ab08.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
        name: "Asher Slip-On Sneaker VANS",
        price: "$44 (16% off)",

    },




]



data.forEach(function (el) {
    let div = document.createElement("div")
    let image = document.createElement("img")
    image.src = el.src

    let name = document.createElement("p")
    name.innerText = el.name;

    let price = document.createElement("h4")
    price.innerText = el.price

    document.querySelector("#main").append(div)
    div.append(image, name, price)
})



let userData = JSON.parse(localStorage.getItem("userData")) 
// console.log(userName)
let display = (userData) =>{
  userData.forEach(el => {
    console.log(el.name)
    document.getElementById('uName').innerText = `Hi, ${el.name}`
  });
}
display(userData)