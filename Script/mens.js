import {navbar,append , footer, renderSuggestion} from "../components/navbar.js"

document.getElementById("navbarbody").innerHTML=navbar()
renderSuggestion()

document.getElementById("footerbar").innerHTML=footer()


document.querySelector("body").style.backgroundColor = "whitesmoke"


let data = [

   

 

    {
        src: "https://assets.ajio.com/medias/sys_master/root/20210218/pbkK/602d73137cdb8c1f1442c8e2/nike_blue_dri-fit_zip-front_bomber_jacket_with_insert_pockets.jpg",
        name: "Nike",
        price: "$44 (16% off)",

    },

    {
        src: "https://assets.ajio.com/medias/sys_master/root/20210831/gy8l/612d4bc5f997ddce89b3485b/adidas_black_%26_grey_colourblock_zip-front_hooded_jacket.jpg",
        name: "Adidas",
        price: "$64 (15% off)",

    },



    {
        src: "https://assets.ajio.com/medias/sys_master/root/20211210/sOrJ/61b35419f997ddf8f14bad84/fort_collins_black_%26_grey_quilted_zip-front_reversible_jacket.jpg",
        name: "Polo",
        price: "$44 (16% off)",

    },


    {
        src: "https://assets.ajio.com/medias/sys_master/root/20210824/bfeC/61241628f997ddce89a90a47/performax_black_heathered_hoodie_with_kangaroo_pockets.jpg",
        name: "Glito",
        price: "$12 (26% off)",

    },


   


    {
        src: "https://assets.ajio.com/medias/sys_master/root/20210909/pH6r/613a29ba7cdb8cb8241f3ea1/teamspirit_blue_zip-front_gillet_with_zipper_pockets.jpg",
        name: "Polo",
        price: "$214 (36% off)",

    },



    {
        src: "https://assets.ajio.com/medias/sys_master/root/20220818/22eZ/62fde1bdf997dd394c018b73/ivoc_olive_green_slim_fit_shirt_with_flap_pockets.jpg",
        name: "Lee Cooper",
        price: "$34 (6% off)",

    },


    {
        src: "https://assets.ajio.com/medias/sys_master/root/20211125/Vndi/619ecbd2f997ddf8f11a491c/7shores_white_printed_slim_fit_shirt.jpg",
        name: "Slim Shirt",
        price: "$13 (14% off)",

    },


    {
        src: "https://assets.ajio.com/medias/sys_master/root/20210609/kF80/60bfbe2eaeb269a9e3dfca94/nike_grey_sportswear_club_pullover_hoodie_with_kangaroo_pockets.jpg",
        name: "Pull Over",
        price: "$24 (16% off)",

    },


    {
        src: "https://assets.ajio.com/medias/sys_master/root/h8c/h58/11941464539166/campus_sutra_blue_hooded_zip-front_sweatshirt.jpg",
        name: "Hoooded-Zip",
        price: "$12(16% off)",

    },


    {
        src: "https://assets.ajio.com/medias/sys_master/root/20211123/he7U/619ce1b6aeb2690110d2d105/puma_blue_brand_print_hoodie_with_kangaroo_pocket.jpg",
        name: "Puma",
        price: "$23 (11% off)",

    },


    {
        src: "https://assets.ajio.com/medias/sys_master/root/20210913/dnE0/613f755d7cdb8cb824201c54/dnmx_blue_superman_graphic_print_crew-neck_sweatshirt.jpg",
        name: "Noson",
        price: "$24 (16% off)",

    },


    {
        src: "https://assets.ajio.com/medias/sys_master/root/20211115/RZQI/61927bfeaeb2690110c49168/lee_cooper_olive_zip-front_drawstring_hoodie.jpg",
        name: "Lee Cooper",
        price: "$29 (46% off)",

    },


    {
        src: "https://assets.ajio.com/medias/sys_master/root/20211027/lgmU/61784c0ef997ddf8f1ea5f27/u.s._polo_assn._white_brand_print_crew-neck_sweatshirt.jpg",
        name: "US Polo",
        price: "$34 (16% off)",

    },


    {
        src: "https://assets.ajio.com/medias/sys_master/root/20211208/M1nY/61affc51f997ddf8f146b5f4/levis_grey_zip-front_hoodie.jpg",
        name: "Levis",
        price: "$13 (16% off)",

    },

    {
        src: "https://assets.ajio.com/medias/sys_master/root/20220113/BcVV/61df2326f997dd66231dfbb9/netplay_burgundy_high-neck_sweatshirt_with_ribbed_hems.jpg",
        name: "Net Play",
        price: "$34 (16% off)",

    },







]



data.forEach(function(el){
 let div= document.createElement("div")
 let image= document.createElement("img")
 image.src=el.src

let name= document.createElement("p")
name.innerText=el.name;

let price= document.createElement("h4")
price.innerText=el.price
 
document.querySelector("#main").append(div)
div.append(image,name,price)
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