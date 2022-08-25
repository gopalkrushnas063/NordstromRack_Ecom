
import {navbar,append} from "../components/navbar.js"

document.getElementById("navbar").innerHTML=navbar()


let activewearData=[
    {
        img:"https://n.nordstrommedia.com/id/sr3/206108b3-0b08-432e-a6cd-e4639915d091.jpeg?h=365&w=240&dpr=2",
        brandName:"MARIKA",
        type:"Abigail Pocket Capri Leggings",
        price:"$22.99",
        off:"(58% off)",
        cost:"$55.00",
        ship:"Free Shipping on Order $89+",
    },
    {
        img:"https://n.nordstrommedia.com/id/sr3/70de4236-221c-4dc3-8401-f09d20c09fa6.jpeg?h=365&w=240&dpr=2",
        brandName:"Z by Zella",
        type:"Re-Gen Cropped Running Leggings",
        price:"$15.93",
        off:"(45% off)",
        cost:"$28.97",
        ship:"Free Shipping on Order $89+",
    },
    {
        img:"https://n.nordstrommedia.com/id/sr3/0202f7f8-5b79-4aae-85c9-5fe09f0a2a7b.jpeg?h=365&w=240&dpr=2",
        brandName:"Onzie",
        type:"High Rise Capris",
        price:"$27.60",
        off:"(60% off)",
        cost:"$69",
        ship:"Free Shipping on Order $89+",

    },
    {
        img:"https://n.nordstrommedia.com/id/sr3/cc19d827-7a7d-4d48-8d7a-5c0e1a419115.jpeg?h=365&w=240&dpr=2",
        brandName:"Inerzia",
        type:"High Waisted Leggings-Pack of 2",
        price:"$39.97",
        off:"(70% off)",
        cost:"$134.98",
        ship:"Free Shipping on Order $89+",

    },
    {
        img:"https://n.nordstrommedia.com/id/sr3/65a23864-f33f-4b6d-a32a-8a180b6fd484.jpeg?h=365&w=240&dpr=2",
        brandName:"Adidas",
        type:"AEROREADY Designed 2 Move Woven Shorts",
        price:"$21.97",
        off:"(26% off)",
        cost:"$30",
        ship:"Free Shipping on Order $89+",
    },
    {
        img:"https://n.nordstrommedia.com/id/sr3/df689f9e-0dcc-4fd5-a62a-bde61fd0c3c1.jpeg?h=365&w=240&dpr=2",
        brandName:"HAWKE & CO",
        type:"Hooded Packable Down Jacket",
        price:"$49.97",
        off:"(74% off)",
        cost:"$195",
        ship:"Free Shipping on Order $89+",
    },
    {
        img:"https://n.nordstrommedia.com/id/sr3/496d6c40-c7f8-4f72-ab09-52249d034457.jpeg?h=365&w=240&dpr=2",
        brandName:"Adidas",
        type:"Long Sleeve T-Shirt",
        price:"$24.99",
        off:"(16% off)",
        cost:"$30",
        ship:"Free Shipping on Order $89+",
    },
    {
        img:"https://n.nordstrommedia.com/id/sr3/a645a4c5-4f04-4ce0-a9ae-63bb7b8982e1.jpeg?h=365&w=240&dpr=2",
        brandName:"Zella",
        type:"Hybrid Tech Commuter Pants",
        price:"$32.97",
        off:"(58% off)",
        cost:"$79.00",
        ship:"Free Shipping on Order $89+",
    },
    {
        img:"https://n.nordstrommedia.com/id/sr3/757d91b3-7082-4c6d-ba97-d4d6bff01627.jpeg?h=365&w=240&dpr=2",
        brandName:"Adidas",
        type:"Kid's (Boys) Linear Logo Joggers",
        price:"$21.97",
        off:"(45% off)",
        cost:"$40.00",
        ship:"Free Shipping on Order $89+",
    },
    {
        img:"https://n.nordstrommedia.com/id/sr3/d55fd7aa-6dc3-43f6-888c-9b146812c42e.jpeg?h=365&w=240&dpr=2",
        brandName:"Z by Zella",
        type:"Kid's (Boys) Walsh Fleece Hoodie",
        price:"$25.97",
        off:"(46% off)",
        cost:"$45.00",
        ship:"Free Shipping on Order $89+",
    },
    {
        img:"https://n.nordstrommedia.com/id/sr3/943fb6df-339d-46cd-930b-e6a1a98ffb8d.jpeg?h=365&w=240&dpr=2",
        brandName:"Z by Zella",
        type:"Kid's (Girls) Sport Bra and Leggings Set",
        price:"$22.97",
        off:"(45% off)",
        cost:"$42.00",
        ship:"Free Shipping on Order $89+",
    },
    {
        img:"https://n.nordstrommedia.com/id/sr3/034015aa-9225-45d1-87ad-26ced36f8f5c.jpeg?h=365&w=240&dpr=2",
        brandName:"Nike",
        type:"Kid's (Girls) Club Tank and Jersey Short Set",
        price:"$22.97",
        off:"(39% off)",
        cost:"$38.00",
        ship:"Free Shipping on Order $89+",
    },
    {
        img:"https://n.nordstrommedia.com/id/sr3/4a8645f7-075b-49af-8d9e-c7e847d7590e.jpeg?h=365&w=240&dpr=2",
        brandName:"ZEROXPOSUR",
        type:"Colardo Mid Top Waterproof Hikin Shoes (Women)",
        price:"$69.97",
        off:"(30% off)",
        cost:"$100",
        ship:"Free Shipping on Order $89+",
    },
    {
        img:"https://n.nordstrommedia.com/id/sr3/446b6bd3-5d50-453a-87da-b642b594bcca.jpeg?h=365&w=240&dpr=2",
        brandName:"Nike",
        type:"Court Legacy Mule(Women)",
        price:"$43",
        off:"(21% off)",
        cost:"$55",
        ship:"Free Shipping on Order $89+",
    },
    {
        img:"https://n.nordstrommedia.com/id/sr3/7d23bd35-df5f-4cf9-bb7d-2b055428ddff.jpeg?h=365&w=240&dpr=2",
        brandName:"PUMA",
        type:"Cool Cat Sport Slide Sandal (Women)",
        price:"$16.97",
        off:"(43% off)",
        cost:"$30",
        ship:"Free Shipping on Order $89+",
    },
    {
        img:"https://n.nordstrommedia.com/id/sr3/28a68a23-5cd9-41c4-9e08-c1859ef0853e.jpeg?h=365&w=240&dpr=2",
        brandName:"PUMA",
        type:"Vicky V3 Mid Sneaker (Women)",
        price:"$45.97",
        off:"(29% off)",
        cost:"$65.00",
        ship:"Free Shipping on Order $89+",
    },
    {
        img:"https://n.nordstrommedia.com/id/sr3/89ecc22a-d2b3-4044-8132-aaff098df12b.jpeg?h=365&w=240&dpr=2",
        brandName:"KEEN",
        type:"Revel IV Mid Polar Waterproof Boot (Men)",
        price:"$119.97",
        off:"(40% off)",
        cost:"$200",
        ship:"Free Shipping on Order $89+",
    },
    {
        img:"https://n.nordstrommedia.com/id/sr3/02bdd46f-83cd-4a53-b94d-5b74fcc3fdab.jpeg?h=365&w=240&dpr=2",
        brandName:"PUMA",
        type:"Electron 2.0 Open Road Atheletic Sneaker (Men)",
        price:"$45.97",
        off:"(34% off)",
        cost:"$70",
        ship:"Free Shipping on Order $89+",
    },
    {
        img:"https://n.nordstrommedia.com/id/sr3/2456402f-8720-429d-b5c7-ebf405b8cc35.jpeg?h=365&w=240&dpr=2",
        brandName:"KEEN",
        type:"NewPort H2 Sandal (Men)",
        price:"$96.97",
        off:"(25% off)",
        cost:"$130",
        ship:"Free Shipping on Order $89+",
    },
    {
        img:"https://n.nordstrommedia.com/id/sr3/ecf3caac-7b55-4969-beb5-98f35bc89564.jpeg?h=365&w=240&dpr=2",
        brandName:"PUMA",
        type:"Cool Cat Sport Slide Sandal (Men)",
        price:"$16.96",
        off:"(50% off)",
        cost:"$30",
        ship:"Free Shipping on Order $89+",
    },
    {
        img:"https://n.nordstrommedia.com/id/sr3/75dbd837-409e-421c-b0e9-19ab9393c123.jpeg?h=365&w=240&dpr=2",
        brandName:"Reebok",
        type:"Classic Unicorn Joggers Sneaker for Girls(Baby & Toddler)",
        price:"$23.97",
        off:"(31% off)",
        cost:"$35",
        ship:"Free Shipping on Order $89+",
    },
    {
        img:"https://n.nordstrommedia.com/id/sr3/8799b74d-917a-44b2-bfdf-cabf198c770d.jpeg?h=365&w=240&dpr=2",
        brandName:"Adidas",
        type:"CARS Sneaker(Girls)",
        price:"$36.97",
        off:"(26% off)",
        cost:"$50",
        ship:"Free Shipping on Order $89+",
    },
    {
        img:"https://n.nordstrommedia.com/id/sr3/1a47d884-76a1-45d1-a67a-abc7d4aebc17.jpeg?h=365&w=240&dpr=2",
        brandName:"Adidas",
        type:"Kid's Hoops Mid Sneaker (Boys)",
        price:"$30.00",
        off:"(30% off)",
        cost:"$43.00",
        ship:"Free Shipping on Order $89+",
    },
    {
        img:"https://n.nordstrommedia.com/id/sr3/12da57a2-1c65-4a1b-892c-f7eaf5944e87.jpeg?h=365&w=240&dpr=2",
        brandName:"Adidas",
        type:"Boys Snekaers",
        price:"$32.97",
        off:"(23% off)",
        cost:"$43.00",
        ship:"Free Shipping on Order $89+",
    },

]



let activewear=(activwearData)=>{
    
        let card=document.getElementById("container")
        //let card1=document.getElementById("card");
        append(activwearData,card)
        // add(card1)

   
}
activewear(activewearData)