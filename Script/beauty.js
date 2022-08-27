import {navbar,append} from "../components/navbar.js"

document.getElementById("navbarbody").innerHTML=navbar()


let beautyData=[
    {
        img:"https://n.nordstrommedia.com/id/sr3/0961a7e5-ee88-44a1-bd1c-b9be54093656.jpeg?h=365&w=240&dpr=2",
        brandName:"MAC Cosmetics",
        type:"Mac Lipstick",
        price:"$9.00",
        off:"(50% off)",
        cost:"$18.00",
        ship:"Free Shipping on Order $89+",
    },
    {
        img:"https://n.nordstrommedia.com/id/sr3/6c536423-492d-408e-b9a9-64c42e48f5ad.jpeg?h=365&w=240&dpr=2",
        brandName:"MAC Cosmetics",
        type:"Mac Mini Traditional Lipstick",
        price:"$14.00",
        off:"(50% off)",
        cost:"$28.00",
        ship:"Free Shipping on Order $89+",
    },
    {
        img:"https://n.nordstrommedia.com/id/sr3/f695273e-7252-4dde-a910-b7f1079886cb.jpeg?h=365&w=240&dpr=2",
        brandName:"MAC Cosmetics",
        type:"Mac Eyelinear",
        price:"$13.97",
        off:"(36% off)",
        cost:"$22.00",
        ship:"Free Shipping on Order $89+",
    },
    {
        img:"https://n.nordstrommedia.com/id/sr3/544c88cf-b947-4e2c-b05d-b5c3244cd1c9.jpeg?h=365&w=240&dpr=2",
        brandName:"Urban Decay",
        type:"Waterproof Powder",
        price:"$24.97",
        off:"(43% off)",
        cost:"$44.00",
        ship:"Free Shipping on Order $89+",
    },
    {
        img:"https://n.nordstrommedia.com/id/sr3/d6893ba2-a6b5-41e2-82ae-d1ed08d1838a.jpeg?h=365&w=240&dpr=2",
        brandName:"Stila",
        type:"Stay All Day Eyelinear",
        price:"$24.97",
        off:"(21% off)",
        cost:"$32.00",
        ship:"Free Shipping on Order $89+",
    },
    {
        img:"https://n.nordstrommedia.com/id/sr3/2c6be26a-8875-4fc8-b489-db43c4000eca.jpeg?h=365&w=240&dpr=2",
        brandName:"Charlotte Tilbury",
        type:"Mini Collagan Lip Gloss",
        price:"$25.00",
        off:"(50% off)",
        cost:"$50.00",
        ship:"Free Shipping on Order $89+",
    },
    {
        img:"https://n.nordstrommedia.com/id/sr3/46021f7a-3d24-4de5-8468-6c9cb10fbe8a.jpeg?h=365&w=240&dpr=2",
        brandName:"MAC Cosmetics",
        type:"Mac Nine Type Eyeshadows",
        price:"$33.00",
        off:"(34% off)",
        cost:"$50.00",
        ship:"Free Shipping on Order $89+",
    },
    {
        img:"https://n.nordstrommedia.com/id/sr3/2bf4e04f-0f92-4df2-b71d-ccdf721c0d84.jpeg?h=365&w=240&dpr=2",
        brandName:"DANIELLE",
        type:"Cosmetic 6 Brush Set",
        price:"$12.97",
        off:"(50% off)",
        cost:"$26.00",
        ship:"Free Shipping on Order $89+",
    },
    {
        img:"https://n.nordstrommedia.com/id/sr3/c4f0b9ea-b4aa-4bd5-87f8-d0ee498ef16b.jpeg?h=365&w=240&dpr=2",
        brandName:"Elemis",
        type:"Soothing Apricot Toner",
        price:"$14.97",
        off:"(58% off)",
        cost:"$36.00",
        ship:"Free Shipping on Order $89+",
    },
    {
        img:"https://n.nordstrommedia.com/id/sr3/982a0966-7d82-4adc-8b85-d78c5f2f8661.jpeg?h=365&w=240&dpr=2",
        brandName:"Elemis",
        type:"Plumping Facial Sleep Mask",
        price:"$26.97",
        off:"(58% off)",
        cost:"$65.00",
        ship:"Free Shipping on Order $89+",
    },
    {
        img:"https://n.nordstrommedia.com/id/sr3/fe4b7d05-dc7e-483b-92af-a85e9a605793.jpeg?h=365&w=240&dpr=2",
        brandName:"Elemis",
        type:"FrangiPani Mohani Shower Cream",
        price:"$16.97",
        off:"(57% off)",
        cost:"$40.00",
        ship:"Free Shipping on Order $89+",
    },
    {
        img:"https://n.nordstrommedia.com/id/sr3/d45e8f77-386b-4af0-9e98-3f7b3d641824.jpeg?h=365&w=240&dpr=2",
        brandName:"TERRE MERE",
        type:"Massage Roller",
        price:"$26.00",
        off:"(78% off)",
        cost:"$128",
        ship:"Free Shipping on Order $89+",
    },
    {
        img:"https://n.nordstrommedia.com/id/sr3/4c3abb5b-6d36-487e-bb60-27d314853b99.jpeg?h=365&w=240&dpr=2",
        brandName:"ARIA",
        type:"Blow Dryer Iconic Technology",
        price:"$67.00",
        off:"(69% off)",
        cost:"$220.00",
        ship:"Free Shipping on Order $89+",
    },
    {
        img:"https://n.nordstrommedia.com/id/sr3/ad40c341-4dc4-4072-8c47-315ce8b50635.jpeg?h=365&w=240&dpr=2",
        brandName:"CORTEX USA",
        type:"CORTEX USA Thermal Brush Set -5",
        price:"$90.00",
        off:"(50% off)",
        cost:"$180.00",
        ship:"Free Shipping on Order $89+",
    },
    {
        img:"https://n.nordstrommedia.com/id/sr3/a6dc5150-1504-4ee7-abc0-905ce967eff2.jpeg?h=365&w=240&dpr=2",
        brandName:"CORTEX USA",
        type:"CORTEX USA Hair Styler",
        price:"$26.97",
        off:"(32% off)",
        cost:"$39.99",
        ship:"Free Shipping on Order $89+",
    },
    {
        img:"https://n.nordstrommedia.com/id/sr3/ac4a0487-2b2c-434b-be48-706c532f828f.jpeg?h=365&w=240&dpr=2",
        brandName:"DR BOTANICALS",
        type:"DR BOTANICALS Conditioner",
        price:"$21.00",
        off:"(55% off)",
        cost:"$49.00",
        ship:"Free Shipping on Order $89+",
    },
    {
        img:"https://n.nordstrommedia.com/id/sr3/ce7eb2d9-b0fc-4904-9e32-a20ed6bc3a89.jpeg?h=365&w=240&dpr=2",
        brandName:"AHAVA",
        type:"Love Yourself Holiday 3 pcs Gift Set",
        price:"$18.00",
        off:"(56% off)",
        cost:"$44.00",
        ship:"Free Shipping on Order $89+",
    },
    {
        img:"https://n.nordstrommedia.com/id/sr3/b2136a0c-2b7e-4f14-a7b1-14362c441e2b.jpeg?h=365&w=240&dpr=2",
        brandName:"philosophy",
        type:"Cozy Bath & Body 4-piece Set",
        price:"$29.97",
        off:"(40% off)",
        cost:"$50.00",
        ship:"Free Shipping on Order $89+",
    },
    {
        img:"https://n.nordstrommedia.com/id/sr3/c4ef0865-ca16-44ad-91d5-07f9f0472c3c.jpeg?h=365&w=240&dpr=2",
        brandName:"C.O. Bigelow",
        type:"Rose Slave Lip Balm",
        price:"$20.00",
        off:"(33% off)",
        cost:"$30.00",
        ship:"Free Shipping on Order $89+",
    },
    {
        img:"https://n.nordstrommedia.com/id/sr3/22948116-fb4e-43bb-ad3c-2c2f98301f17.jpeg?h=365&w=240&dpr=2",
        brandName:"L'Occitane",
        type:"Almond Eco Refill Shower Oil",
        price:"$40.00",
        off:"(20% off)",
        cost:"$50.00",
        ship:"Free Shipping on Order $89+",
    },
    {
        img:"https://n.nordstrommedia.com/id/sr3/15f6ffb7-b29b-46f6-ae4f-98032dd7025f.jpeg?h=365&w=240&dpr=2",
        brandName:"TONIX",
        type:"Body Spray",
        price:"$19.97",
        off:"(33% off)",
        cost:"$30.00",
        ship:"Free Shipping on Order $89+",
    },
    {
        img:"https://n.nordstrommedia.com/id/sr3/fe71b7bf-9b30-44e1-a1a3-217845395896.jpeg?h=365&w=240&dpr=2",
        brandName:"Chloé",
        type:"Chloé Love Story Perfume Spray",
        price:"$80.00",
        off:"(23% off)",
        cost:"$105.00",
        ship:"Free Shipping on Order $89+",
    },
    {
        img:"https://n.nordstrommedia.com/id/sr3/b88edccd-fafa-4a4b-b860-69b14a0b7d6b.jpeg?h=365&w=240&dpr=2",
        brandName:"Calvin Klein",
        type:"Euphoria for Men Eau de Toiletee- 20ml",
        price:"$14.97",
        off:"(34% off)",
        cost:"$23.00",
        ship:"Free Shipping on Order $89+",
    },
    {
        img:"https://n.nordstrommedia.com/id/sr3/6e3f2481-1220-4c50-b27b-7fcf1f8514c1.jpeg?h=365&w=240&dpr=2",
        brandName:"Dolce&Gabbana",
        type:"Dolce&Gabbana Men Eau de Toiletee- 20ml", 
        price:"$70.00",
        off:"(27% off)",
        cost:"$96.00",
        ship:"Free Shipping on Order $89+",
    },
    
]



let beauty=(beautyData)=>{
    
        let card=document.getElementById("container")
        //let card1=document.getElementById("card");
        append(beautyData,card)
        // add(card1)

   
}
beauty(beautyData)



let userData = JSON.parse(localStorage.getItem("userData")) 
// console.log(userName)
let display = (userData) =>{
  userData.forEach(el => {
    console.log(el.name)
    document.getElementById('uName').innerText = `Hi, ${el.name}`
  });
}
display(userData)