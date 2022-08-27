import {navbar,append , footer} from "../components/navbar.js"

document.getElementById("navbarbody").innerHTML=navbar()

document.getElementById("footerbar").innerHTML=footer()


let bagacessoriesData=[
    {
        img:"https://n.nordstrommedia.com/id/sr3/8b97d68a-b896-4db9-81ff-475ef45d418c.jpeg?h=365&w=240&dpr=2",
        brandName:"Salvatore Ferragamo",
        type:"57mm Square Sun Glass (Mens)",
        price:"$89.97",
        off:"(75% off)",
        cost:"$370.00",
        ship:"Free Shipping on Order $89+",
    },
    {
        img:"https://n.nordstrommedia.com/id/sr3/bbab9124-7ae5-44ca-a14b-a88adcf15970.jpeg?h=365&w=240&dpr=2",
        brandName:"True Religion Brand Jeans",
        type:"Horeshoe Line Baseball Cap",
        price:"$12.72",
        off:"(78% off)",
        cost:"$59.00",
        ship:"Free Shipping on Order $89+",
    },
    {
        img:"https://n.nordstrommedia.com/id/sr3/4c38af1a-4128-4b84-8fc3-3edb41d848bd.jpeg?h=365&w=240&dpr=2",
        brandName:"Robert Graham",
        type:"The Jedi Sling Bag",
        price:"$59.97",
        off:"(59% off)",
        cost:"$140.00",
        ship:"Free Shipping on Order $89+",
    },
    {
        img:"https://n.nordstrommedia.com/id/sr3/af6ca257-2124-4c49-960f-201b3f66a8bf.jpeg?h=365&w=240&dpr=2",
        brandName:"Trafalgar",
        type:"Leather Card case",
        price:"$14.96",
        off:"(70% off)",
        cost:"$50.00",
        ship:"Free Shipping on Order $89+",
    },
    {
        img:"https://n.nordstrommedia.com/id/sr3/1bc746fb-a3ad-4c17-820e-c8a56d7a4376.jpeg?h=365&w=240&dpr=2",
        brandName:"MCM",
        type:"60 mm eometric Sunglass (Women)",
        price:"$59.97",
        off:"(81% off)",
        cost:"$330.00",
        ship:"Free Shipping on Order $89+",
    },
    {
        img:"https://n.nordstrommedia.com/id/sr3/fe7a8203-f5ec-4abf-abdd-8ec9f4e54918.jpeg?h=365&w=240&dpr=2",
        brandName:"MCM",
        type:"60 mm Reactangle Sunglass (Women)",
        price:"$59.97",
        off:"(76% off)",
        cost:"$255.00",
        ship:"Free Shipping on Order $89+",
    },
    {
        img:"https://n.nordstrommedia.com/id/sr3/953ea7e9-6363-4577-99aa-b266445778d6.jpeg?h=365&w=240&dpr=2",
        brandName:"Kurt Geiger London",
        type:"Kenisington Small Camera Bag",
        price:"$94.99",
        off:"(48% off)",
        cost:"$185.00",
        ship:"Free Shipping on Order $89+",
    },
    {
        img:"https://n.nordstrommedia.com/id/sr3/063a3512-5324-442e-ae51-613af08fc149.jpeg?h=365&w=240&dpr=2",
        brandName:"Aimee Kestenberg",
        type:"Sanubury Leather Tote Bag",
        price:"$139.97",
        off:"(64% off)",
        cost:"$328",
        ship:"Free Shipping on Order $89+",
    },
    {
        img:"https://n.nordstrommedia.com/id/sr3/37ff9e40-3af7-428b-b6b2-4b04d37a7de1.jpeg?h=365&w=240&dpr=2",
        brandName:"Adornia",
        type:"Triangle Post Earrings",
        price:"$19.98",
        off:"(91% off)",
        cost:"$225.00",
        ship:"Free Shipping on Order $89+",
    },
    {
        img:"https://n.nordstrommedia.com/id/sr3/cc38b4c3-bbb4-461a-b5db-12d2e3168117.jpeg?h=365&w=240&dpr=2",
        brandName:"Adornia",
        type:"Gold Plated Pearl Bracelet ",
        price:"$19.98",
        off:"(86% off)",
        cost:"$150.00",
        ship:"Free Shipping on Order $89+",
    },
    {
        img:"https://n.nordstrommedia.com/id/sr3/8020d23e-98d0-4b38-b571-c50987a4cf21.jpeg?h=365&w=240&dpr=2",
        brandName:"Sterling Forever",
        type:"Necklace",
        price:"$19.97",
        off:"(63% off)",
        cost:"$55.00",
        ship:"Free Shipping on Order $89+",
    },
    {
        img:"https://n.nordstrommedia.com/id/sr3/bc23a94c-f85d-4685-8d56-5777300f63f9.jpeg?h=365&w=240&dpr=2",
        brandName:"NORDSTROM RACK",
        type:"Stone and Abalone Rings Sets",
        price:"$6.48",
        off:"(50% off)",
        cost:"$12.97",
        ship:"Free Shipping on Order $89+",
    },{
        img:"https://n.nordstrommedia.com/id/sr3/ee87eb4f-fd05-46eb-af92-1b414a4da2f9.jpeg?h=365&w=240&dpr=2",
        brandName:"Bony Levy",
        type:"18K Gold Diamond Earrings",
        price:"$374.00",
        off:"(62% off)",
        cost:"$995.00",
        ship:"Free Shipping on Order $89+",
    },
    {
        img:"https://n.nordstrommedia.com/id/sr3/4e8622dd-ca9b-465d-af0e-ffbb353c7f6e.jpeg?h=365&w=240&dpr=2",
        brandName:"Judith Ripka",
        type:"Oval Stone Drop Earrings",
        price:"$129.97",
        off:"(51% off)",
        cost:"$270.00",
        ship:"Free Shipping on Order $89+",
    },
    {
        img:"https://n.nordstrommedia.com/id/sr3/1354e8c4-677f-48b0-962d-881cad8c221c.jpeg?h=365&w=240&dpr=2",
        brandName:"Bony Levy",
        type:"14K Gold Heart Stud Earrings",
        price:"$",
        off:"(% off)",
        cost:"$",
        ship:"Free Shipping on Order $89+",
    },
    {
        img:"https://n.nordstrommedia.com/id/sr3/6b7c82cf-a793-409e-b304-92ed204f7789.jpeg?h=365&w=240&dpr=2",
        brandName:"Bony Levy",
        type:"14K Gold Cross Earrings",
        price:"$56.22",
        off:"(62% off)",
        cost:"$150.00",
        ship:"Free Shipping on Order $89+",
    },
    {
        img:"https://n.nordstrommedia.com/id/sr3/4d373112-676a-4995-860d-292c27238fa9.jpeg?h=365&w=240&dpr=2",
        brandName:"Marc Jacobs",
        type:"Mini Leather Bucket Bag",
        price:"$209.97",
        off:"(53% off)",
        cost:"$450",
        ship:"Free Shipping on Order $89+",
    },
    {
        img:"https://n.nordstrommedia.com/id/sr3/27008546-293e-4475-89e6-4bf0854b5957.jpeg?h=365&w=240&dpr=2",
        brandName:"kate spade new york",
        type:"Mini Margux Leather Satchel",
        price:"$119.91",
        off:"(51% off)",
        cost:"$240.00",
        ship:"Free Shipping on Order $89+",
    },
    {
        img:"https://n.nordstrommedia.com/id/sr3/8e8a1e48-bcbc-4a9b-9b13-846d9b11a419.jpeg?h=365&w=240&dpr=2",
        brandName:"Marc Jacobs",
        type:"Mini Toto Colorblock Leather Bag",
        price:"$169.97",
        off:"(54% off)",
        cost:"$375.00",
        ship:"Free Shipping on Order $89+",
    },
    {
        img:"https://n.nordstrommedia.com/id/sr3/58c2777e-8bb5-4ee5-b029-8f16280e6522.jpeg?h=365&w=240&dpr=2",
        brandName:"Luv Betsey by Betsey Johnson",
        type:"Harrley Mini bag",
        price:"$19.97",
        off:"(60% off)",
        cost:"$48",
        ship:"Free Shipping on Order $89+",
    },
    {
        img:"https://n.nordstrommedia.com/id/sr3/7978660c-72e6-4050-bf60-87e4d6fca970.jpeg?h=365&w=240&dpr=2",
        brandName:"TRAVELPRO",
        type:"Roller Master Lite 28 inch Expandable Luggage",
        price:"$149.97",
        off:"(67% off)",
        cost:"$460.00",
        ship:"Free Shipping on Order $89+",
    },
    {
        img:"https://n.nordstrommedia.com/id/sr3/1f597351-a876-4b4c-8202-3c64cfcc698e.jpeg?h=365&w=240&dpr=2",
        brandName:"Vacay",
        type:"Spotlight Ombre 20 inch Expandable Suitecase",
        price:"$77.97",
        off:"(50% off)",
        cost:"$159.99",
        ship:"Free Shipping on Order $89+",
    },
    {
        img:"https://n.nordstrommedia.com/id/sr3/ff185c1b-5dfe-4bd8-ae92-6f3554e28845.jpeg?h=365&w=240&dpr=2",
        brandName:"Longchamp",
        type:"Le Pliage Travel Tote",
        price:"$109.97",
        off:"(45% off)",
        cost:"$199.99",
        ship:"Free Shipping on Order $89+",
    },
    {
        img:"https://n.nordstrommedia.com/id/sr3/f37a992c-03bf-4ae7-974e-a78c0212f2fe.jpeg?h=365&w=240&dpr=2",
        brandName:"BOCONI",
        type:"Slim Messenger Mailbag",
        price:"$119.97",
        off:"(59% off)",
        cost:"$298.00",
        ship:"Free Shipping on Order $89+",
    },
    

]



let bagacessories=(bagacessoriesData)=>{
    
        let card=document.getElementById("container")
        append(bagacessoriesData,card)
  
}
bagacessories(bagacessoriesData)



let userData = JSON.parse(localStorage.getItem("userData")) || [] 
// console.log(userName)
let display = (userData) =>{
  userData.forEach(el => {
    console.log(el.name)
    document.getElementById('uName').innerText = `Hi, ${el.name}`
  });
}
display(userData)