
import {append} from "./pagesfetch.js"


let giftData=[
    {
        img:"https://n.nordstrommedia.com/id/sr3/a8cbc1a1-e9ad-4682-a7e0-f2dd79f1e43d.jpeg?q=45&fit=fill&fm=jpg&dpr=2&h=408&w=266",
        brandName:"Katy Perry",
        type:"Geli Sandal (Women)",
        price:+21.97,
        off:"(73% off)",
        cost:"$59.00",
        ship:"Free Shipping on Order $89+",
    },
    {
        img:"https://n.nordstrommedia.com/id/sr3/1a9dcab0-a72a-40ea-a4cb-7d666309527b.jpeg?h=365&w=240&dpr=1",
        brandName:"New Markdown",
        type:"59 mm Oversized Glass",
        price:"$80.00",
        off:"(71% off)",
        cost:"$296.00",
        ship:"Free Shipping on Order $89+",
    },
    {
        img:"https://n.nordstrommedia.com/id/sr3/9f1d46ef-10fe-46fa-bac0-53b5951f7d60.jpeg?h=365&w=240&dpr=2",
        brandName:"MERKURY INNOVATIONS ",
        type:"Wireless Earbuds",
        price:"$12.72",
        off:"(57% off)",
        cost:"$29.99",
        ship:"Free Shipping on Order $89+",
    },
    {
        img:"https://n.nordstrommedia.com/id/sr3/7a88eaff-3fe2-4658-b76a-7ea36c8ee7e0.jpeg?h=365&w=240&dpr=2",
        brandName:"Sterling Forever ",
        type:"14 K Gold Earing",
        price:"$15.00",
        off:"(72% off)",
        cost:"$55.00",
        ship:"Free Shipping on Order $89+",
    },
    {
        img:"https://n.nordstrommedia.com/id/sr3/adce745b-150d-457f-8a28-8443ec04c8eb.jpeg?h=365&w=240&dpr=2",
        brandName:"New Markdown",
        type:"Levis Two pocket Military Jacket",
        price:"$80.00",
        off:"(72% off)",
        cost:"$180.00",
        ship:"Free Shipping on Order $89+",
    },
    {
        img:"https://n.nordstrommedia.com/id/sr3/542a84dc-9a81-4fe1-96c3-57a936f66b6c.jpeg?h=365&w=240&dpr=2",
        brandName:"Ray-Ban",
        type:"59 mm Polarized Sunglasses",
        price:"$50.00",
        off:"(50% off)",
        cost:"$100.00",
        ship:"Free Shipping on Order $89+",
    },
    {
        img:"https://n.nordstrommedia.com/id/sr3/b33b5296-62c3-4dca-a69c-e8238245d7ed.jpeg?h=365&w=240&dpr=2",
        brandName:"Yves Saint Laurent",
        type:"Yves Saint Laurent Spray",
        price:"$67.00",
        off:"(31% off)",
        cost:"$99.00",
        ship:"Free Shipping on Order $89+",
    },
    {
        img:"https://n.nordstrommedia.com/id/sr3/abd0653b-8251-43e8-8a82-0b22a5439f37.jpeg?h=365&w=240&dpr=2",
        brandName:"NEST New York",
        type:"NEST New York Diffuser",
        price:"$32.97",
        off:"(38% off)",
        cost:"$54.00",
        ship:"Free Shipping on Order $89+",
    },
    {
        img:"https://n.nordstrommedia.com/id/sr3/27baf2a2-e98f-4a3d-97db-cc245b96d156.jpeg?h=365&w=240&dpr=2",
        brandName:"Nike",
        type:"All Day Play Hooded Coverall",
        price:"$30.00",
        off:"(40% off)",
        cost:"$50.00",
        ship:"Free Shipping on Order $89+",
    },
    {
        img:"https://n.nordstrommedia.com/id/sr3/b7f5fd20-ddd4-4c8e-bc29-dba2390bfef5.jpeg?h=365&w=240&dpr=2",
        brandName:"NORDSTROM RACK",
        type:"Kids Toddler",
        price:"$21.97",
        off:"(50% off)",
        cost:"$44.00",
        ship:"Free Shipping on Order $89+",
    },
    {
        img:"https://n.nordstrommedia.com/id/sr3/e17dab3c-d2b1-47a8-8502-906296ebef36.jpeg?h=365&w=240&dpr=2",
        brandName:"New Markdown",
        type:"Kids SwimSuit",
        price:"$10.18",
        off:"(60% off)",
        cost:"$20.97",
        ship:"Free Shipping on Order $89+",
    },
    {
        img:"https://n.nordstrommedia.com/id/sr3/1613cd53-ef55-4f87-8884-1ed1226f30b0.jpeg?h=365&w=240&dpr=2",
        brandName:"New Markdown",
        type:"Fun Play Dress",
        price:"$20.00",
        off:"(25% off)",
        cost:"$26.00",
        ship:"Free Shipping on Order $89+",
    },
    {
        img:"https://n.nordstrommedia.com/id/sr3/e6574b6d-ac06-4b0c-942c-3b67cead6de5.jpeg?h=365&w=240&dpr=2",
        brandName:"FRIGIDAIRE",
        type:"Smoothie Maker Machine",
        price:"$25.00",
        off:"(16% off)",
        cost:"$30.00",
        ship:"Free Shipping on Order $89+",
    },
    {
        img:"https://n.nordstrommedia.com/id/sr3/e101e4e6-e738-47f5-9439-de7491a867da.jpeg?h=365&w=240&dpr=2",
        brandName:"Cuisinart",
        type:"2-Slice Toaster",
        price:"$60.00",
        off:"(45% off)",
        cost:"$110.00",
        ship:"Free Shipping on Order $89+",
    },
    {
        img:"https://n.nordstrommedia.com/id/sr3/4969850c-23df-44dc-a2c9-e978b531d096.jpeg?h=365&w=240&dpr=2",
        brandName:"Cuisinart",
        type:"Juicing Blender",
        price:"$100.00",
        off:"(85% off)",
        cost:"$185.00",
        ship:"Free Shipping on Order $89+",
    },
    {
        img:"https://n.nordstrommedia.com/id/sr3/c97d88f1-048c-4f05-85a4-59fc401eefc3.jpeg?h=365&w=240&dpr=2",
        brandName:"TIGER",
        type:"Rice Cooker and Warmer",
        price:"$129.27",
        off:"(34% off)",
        cost:"$200",
        ship:"Free Shipping on Order $89+",
    },
    {
        img:"https://n.nordstrommedia.com/id/sr3/a356aa4c-68c1-4310-bf21-25b8d10e0763.jpeg?h=365&w=240&dpr=2",
        brandName:"BROOKSTONE",
        type:"Automatic Wine Opener",
        price:"$20.00",
        off:"(50% off)",
        cost:"$40.00",
        ship:"Free Shipping on Order $89+",
    },
    {
        img:"https://n.nordstrommedia.com/id/sr3/2fbc0126-09b8-4d91-a03d-214f31cb59c5.jpeg?h=365&w=240&dpr=2",
        brandName:"NEST New York",
        type:"Bamboo Scented Candle",
        price:"$18.00",
        off:"(10% off)",
        cost:"$20.00",
        ship:"Free Shipping on Order $89+",
    },
    {
        img:"https://n.nordstrommedia.com/id/sr3/517a1f94-7e3e-4234-906a-7c953d4bf665.jpeg?h=365&w=240&dpr=2",
        brandName:"BOMBAY",
        type:"Cutting Board",
        price:"$30.00",
        off:"(42% off)",
        cost:"$52.00",
        ship:"Free Shipping on Order $89+",
    },
    {
        img:"https://n.nordstrommedia.com/id/sr3/7bc3a661-1165-42ec-8a3d-bfba6365c677.jpeg?h=365&w=240&dpr=2",
        brandName:"BROOKSTONE",
        type:"Compact Wine Opener",
        price:"$27.00",
        off:"(55% off)",
        cost:"$60.00",
        ship:"Free Shipping on Order $89+",
    },
    {
        img:"https://n.nordstrommedia.com/id/sr3/adcca1ab-83d5-4f81-8e1f-41442bea9a39.jpeg?h=365&w=240&dpr=2",
        brandName:"GLAMGLOW",
        type:"Clearing Treatment mask",
        price:"$25.00",
        off:"(50% off)",
        cost:"$50.00",
        ship:"Free Shipping on Order $89+",
    },
    {
        img:"https://n.nordstrommedia.com/id/sr3/359539ad-297b-4255-b4e5-f1dbf5669352.jpeg?h=365&w=240&dpr=2",
        brandName:"NORDSTORM",
        type:"Jewellery Box",
        price:"$20.00",
        off:"(33% off)",
        cost:"$30.00",
        ship:"Free Shipping on Order $89+",
    },
    {
        img:"https://n.nordstrommedia.com/id/sr3/95d6a201-7ece-4c0b-b08f-1c82e28c2586.jpeg?h=365&w=240&dpr=2",
        brandName:"Urban Decay",
        type:"Mini Pallete",
        price:"$13.00",
        off:"(48% off)",
        cost:"$25.00",
        ship:"Free Shipping on Order $89+",
    },
    {
        img:"https://n.nordstrommedia.com/id/sr3/d0de8358-97d4-4a77-9248-f3cfbb3d1dda.jpeg?h=365&w=240&dpr=2",
        brandName:"IZOD",
        type:"4 Pcs Travel Size Kit",
        price:"$12.99",
        off:"(36% off)",
        cost:"$19.99",
        ship:"Free Shipping on Order $89+",
    },
]



let gift=(giftData)=>{
    
    let card=document.getElementById("container")
    append(giftData,card)
     
   
}
gift(giftData)


let pricesort=document.getElementById("sorthl")

pricesort.onclick=()=>{
    prhtl()
}


let prhtl=(giftData)=>{

    console.log(giftData)
}