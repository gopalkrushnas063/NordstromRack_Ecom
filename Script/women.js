import {navbar,append} from "../components/navbar.js"

document.getElementById("navbarbody").innerHTML=navbar()

document.querySelector("body").style.backgroundColor = "whitesmoke"

let topImg = document.createElement("img")
topImg.src = "https://n.nordstrommedia.com/id/dbda3c03-cd74-4d5c-9dd4-e5afe145b67a.png?h=201&w=1609"

let main = document.querySelector("#topImage")
main.append(topImg)


let data = [

   

 

    {
        src: "https://assets.ajio.com/medias/sys_master/root/20211116/a9qN/6193d8e1aeb2690110c749f7/levis_blue_lightly_washed_mid-rise_skinny_jeans.jpg",
        name: "Levis",
        price: "$44 (16% off)",

    },

    {
        src: "https://assets.ajio.com/medias/sys_master/root/20210830/iV8G/612d00d4aeb269a26882292a/levis_navy_blue_high-neck_zip-front_jacket_with_insert_pockets.jpg",
        name: "Levis",
        price: "$64 (15% off)",

    },



    {
        src: "https://assets.ajio.com/medias/sys_master/root/20210830/dQR0/612cf85a7cdb8cb8240c4550/levis_black_joggers_with_contrast_side_taping.jpg",
        name: "Polo",
        price: "$44 (16% off)",

    },


    {
        src: "https://assets.ajio.com/medias/sys_master/root/20220310/4yG6/6228fa3aaeb26921afcfd6ff/levis_blue_mid-rise_denim_shorts_with_raw_hemline.jpg",
        name: "Leivs",
        price: "$22 (26% off)",

    },


   


    {
        src: "https://assets.ajio.com/medias/sys_master/root/20220223/tIdb/6215512ff997dd03e2e71f4f/levis_pink_logo_print_crew-neck_t-shirt.jpg",
        name: "Levis",
        price: "$24 (16% off)",

    },



    {
        src: "https://assets.ajio.com/medias/sys_master/root/20220803/Dewf/62ea9410aeb26921afc2e8ca/levis_blue_denim_button-down_jacket_with_flap_pockets.jpg",
        name: "Denim",
        price: "$14 (16% off)",

    },


    {
        src: "https://assets.ajio.com/medias/sys_master/root/20220429/Sdi2/626c09b3aeb26921af4c0e26/levis_white_shirt_with_concealed_placket.jpg",
        name: "Olo",
        price: "$14 (16% off)",

    },


    {
        src: "https://assets.ajio.com/medias/sys_master/root/20220804/LNY9/62ebf1bdf997dd03e222e718/levis_green_quilted_zip-front_biker_jacket.jpg",
        name: "Wellos",
        price: "$24 (16% off)",

    },


    {
        src: "https://assets.ajio.com/medias/sys_master/root/20210805/GAze/610bdb9faeb269a2686acc93/levis_pink_textured_round-neck_t-shirt.jpg",
        name: "Puma",
        price: "$24 (16% off)",

    },


    {
        src: "https://assets.ajio.com/medias/sys_master/root/20220223/qZDK/62153971aeb26921afadb592/levis_pink_floral_print_boat-neck_sleevless_top.jpg",
        name: "Adidas",
        price: "$24 (16% off)",

    },


    {
        src: "https://assets.ajio.com/medias/sys_master/root/20220223/CnSZ/62155bfdf997dd03e2e7854d/levis_pink_schifli_embroidered_high-neck_top.jpg",
        name: "Noson",
        price: "$24 (16% off)",

    },


    {
        src: "https://assets.ajio.com/medias/sys_master/root/20210625/PRNB/60d4dc36f997ddb312ed8bbe/levis_green_printed_slim_fit_ankle-length_joggers.jpg",
        name: "Lee Cooper",
        price: "$29 (46% off)",

    },


    {
        src: "https://assets.ajio.com/medias/sys_master/root/20210830/qG5T/612cf49a7cdb8cb8240c39c9/levis_red_high-neck_zip-front_jacket_with_insert_pockets.jpg",
        name: "Levis",
        price: "$34 (16% off)",

    },


    {
        src: "https://assets.ajio.com/medias/sys_master/root/20220211/qgjD/6206827df997dd03e2cc64a1/levis_black_zip-front_hoodie_with_split_kangaroo_pockets.jpg",
        name: "Olonk",
        price: "$14 (16% off)",

    },

    {
        src: "https://assets.ajio.com/medias/sys_master/root/20220223/qBb9/62153eadaeb26921afadc745/levis_yellow_ribbed_boat-neck_top.jpg",
        name: "Mink",
        price: "$24 (16% off)",

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