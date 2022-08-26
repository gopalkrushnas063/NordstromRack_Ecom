
import {append} from "./pagesfetch.js"


let homeData=[
    {
        img:"https://n.nordstrommedia.com/id/sr3/5f597b1b-aac7-4ea5-b009-53cf66216703.jpeg?h=365&w=240&dpr=2",
        brandName:"Modern Threads",
        type:"Non Slip Bath Mat 2 Set",
        price:"$24.97",
        off:"(67% off)",
        cost:"$78",
        ship:"Free Shipping on Order $89+",
    },
    {
        img:"https://n.nordstrommedia.com/id/sr3/20ba54a8-0ada-4ef9-91a9-7e00d3315030.jpeg?h=365&w=240&dpr=2",
        brandName:"ENCHANTE HOME",
        type:"Cotton Bath Mat 2 Set",
        price:"$49.99",
        off:"(60% off)",
        cost:"$126.45",
        ship:"Free Shipping on Order $89+",
    },
    {
        img:"https://n.nordstrommedia.com/id/sr3/afa4ee52-5f3b-4c51-9d7a-1dd00886432c.jpeg?h=365&w=240&dpr=2",
        brandName:"ENCHANTE HOME",
        type:"Sinemans Circle Bath Mat 2 Set",
        price:"$41.97",
        off:"(46% off)",
        cost:"$77.99",
        ship:"Free Shipping on Order $89+",
    },
    {
        img:"https://n.nordstrommedia.com/id/sr3/0682320b-9eb1-4975-96cf-3742fe2b1d63.jpeg?h=365&w=240&dpr=2",
        brandName:"Modern Thread",
        type:"Cotton Bath Mat 2 Set",
        price:"$34.99",
        off:"(61% off)",
        cost:"$90.75",
        ship:"Free Shipping on Order $89+",
    },
    {
        img:"https://n.nordstrommedia.com/id/sr3/266723e1-023a-4c7d-b3f1-4f949cd51bf0.jpeg?h=365&w=240&dpr=2",
        brandName:"Nordstrom",
        type:"Cooling Down Alternative Pillow",
        price:"$29.98",
        off:"(56% off)",
        cost:"$69.00",
        ship:"Free Shipping on Order $89+",
    },
    {
        img:"https://n.nordstrommedia.com/id/sr3/3f1e4ab0-a6b0-4140-a2e0-d85cda719b21.jpeg?h=365&w=240&dpr=2",
        brandName:"ELLA JAYNE HOME",
        type:"Cooling Gel Pillow Set-2",
        price:"$39.99",
        off:"(61% off)",
        cost:"$95.75",
        ship:"Free Shipping on Order $89+",
    },
    {
        img:"https://n.nordstrommedia.com/id/sr3/88eb4d9a-ba62-4c7d-865f-bb65d8056f15.jpeg?h=365&w=240&dpr=2",
        brandName:"Nordstrom",
        type:"Bliss Plush Tassel Throw",
        price:"$18.00",
        off:"(52% off)",
        cost:"$39.50",
        ship:"Free Shipping on Order $89+",
    },
    {
        img:"https://n.nordstrommedia.com/id/sr3/1d63326a-8387-4978-bb4b-2767fb8f8cb9.jpeg?h=365&w=240&dpr=2",
        brandName:"ENVOGUE",
        type:"Merry Christmas Throw Blanket",
        price:"$24.97",
        off:"(72% off)",
        cost:"$89.99",
        ship:"Free Shipping on Order $89+",
    },
    {
        img:"https://n.nordstrommedia.com/id/sr3/bc54001e-5bcd-45cc-8753-eb5276d0addb.jpeg?h=365&w=240&dpr=2",
        brandName:"STRATTON HOME DECOR",
        type:"Plus Gold Hand Scrulpters",
        price:"$39.00",
        off:"(33% off)",
        cost:"$56.00",
        ship:"Free Shipping on Order $89+",
    },
    {
        img:"https://n.nordstrommedia.com/id/sr3/a05918ae-57b2-4658-b761-a1db04c104d7.jpeg?h=365&w=240&dpr=2",
        brandName:"SORBUS",
        type:"Metal and Solid Wood Clock",
        price:"$16.08",
        off:"(69% off)",
        cost:"$52.00",
        ship:"Free Shipping on Order $89+",
    },
    {
        img:"https://n.nordstrommedia.com/id/sr3/3cfd3bd5-4261-4186-9df9-66f205bab92f.jpeg?h=365&w=240&dpr=2",
        brandName:"HOME ESSENTIALS AND BEYOND",
        type:"Gold SandTimer",
        price:"$35.00",
        off:"(33% off)",
        cost:"$52.00",
        ship:"Free Shipping on Order $89+",
    },
    {
        img:"https://n.nordstrommedia.com/id/sr3/360ba594-f741-4c41-a288-29f0573fd950.jpeg?h=365&w=240&dpr=2",
        brandName:"GINGER BIRCH STUDIO",
        type:"White Ceramic Jar",
        price:"$40.00",
        off:"(45% off)",
        cost:"$75.00",
        ship:"Free Shipping on Order $89+",
    },
    {
        img:"https://n.nordstrommedia.com/id/sr3/da6ecb9b-b166-40ca-b4a4-0be2cf7e8744.jpeg?h=365&w=240&dpr=2",
        brandName:"GreenPan",
        type:"Casserole Pot",
        price:"$27.00",
        off:"(70% off)",
        cost:"$60.00",
        ship:"Free Shipping on Order $89+",
    },
    {
        img:"https://n.nordstrommedia.com/id/sr3/a23f2b43-e4c9-4e0c-91b7-294ca188546c.jpeg?h=365&w=240&dpr=2",
        brandName:"KITCHENAID",
        type:"Universal Measuring Cup",
        price:"$9.97",
        off:"(50% off)",
        cost:"$20.97",
        ship:"Free Shipping on Order $89+",
    },
    {
        img:"https://n.nordstrommedia.com/id/sr3/d51c5fff-a9bc-40b1-80a8-b0b5015fdab2.jpeg?h=365&w=240&dpr=2",
        brandName:"JAY IMPORTS",
        type:"Wine Goblet 4 Pcs Set",
        price:"$20.00",
        off:"(50% off)",
        cost:"$40.00",
        ship:"Free Shipping on Order $89+",
    },
    {
        img:"https://n.nordstrommedia.com/id/sr3/72bc11de-e9a3-4e4c-983e-f5783fae8f76.jpeg?h=365&w=240&dpr=2",
        brandName:"SORBUS",
        type:"Wine Bottle & Steamware Rack Holder",
        price:"$63.97",
        off:"(25% off)",
        cost:"$85.99",
        ship:"Free Shipping on Order $89+",
    },
    {
        img:"https://n.nordstrommedia.com/id/sr3/de0a6229-abf0-4481-9c7e-5eeceb6d5b02.jpeg?h=365&w=240&dpr=2",
        brandName:"Modern Threads",
        type:"Luxury Velvet Dog Bed",
        price:"$29.97",
        off:"(57% off)",
        cost:"$69.99",
        ship:"Free Shipping on Order $89+",
    },
    {
        img:"https://n.nordstrommedia.com/id/sr3/7c366586-a4a6-4d80-aad3-29c921bbf1b3.jpeg?h=365&w=240&dpr=2",
        brandName:"HOTEL DOGGY",
        type:"Flip Skull Sweater",
        price:"$17.00",
        off:"(32% off)",
        cost:"$25.00",
        ship:"Free Shipping on Order $89+",
    },
    {
        img:"https://n.nordstrommedia.com/id/sr3/c67ce49f-8a05-4a80-ad4f-f51d01626cf4.jpeg?h=365&w=240&dpr=2",
        brandName:"MYTAGALONGS",
        type:"Soft Tie Dye Print Doggy Leash",
        price:"$12.97",
        off:"(50% off)",
        cost:"$24.97",
        ship:"Free Shipping on Order $89+",
    },
    {
        img:"https://n.nordstrommedia.com/id/sr3/e0fdb4f9-290a-4a26-b8db-71a46e314ad9.jpeg?h=365&w=240&dpr=2",
        brandName:"PET LIFE",
        type:"Pet Carrier",
        price:"$50.00",
        off:"(12% off)",
        cost:"$58.00",
        ship:"Free Shipping on Order $89+",
    },
    {
        img:"https://n.nordstrommedia.com/id/sr3/41eb895b-4ce8-4610-99c1-4165a8e5b9ee.jpeg?h=365&w=240&dpr=2",
        brandName:"Linum Home Textiles",
        type:"Chaise Lawn Cover With Side Pocket",
        price:"$70.00",
        off:"(46% off)",
        cost:"$130.00",
        ship:"Free Shipping on Order $89+",
    },
    {
        img:"https://n.nordstrommedia.com/id/sr3/e372cea7-0515-4c12-9244-01fd17511065.jpeg?h=365&w=240&dpr=2",
        brandName:"TOSCANA",
        type:"Cheese Cutting Set and Board",
        price:"$43.00",
        off:"(10% off)",
        cost:"$48.00",
        ship:"Free Shipping on Order $89+",
    },
    {
        img:"https://n.nordstrommedia.com/id/sr3/60085627-4f8d-4b0c-ae36-a05afd34aedb.jpeg?h=365&w=240&dpr=2",
        brandName:"Picnic Time",
        type:"Beer Caddy Cooler Tote with Opener",
        price:"$40.00",
        off:"(9% off)",
        cost:"$43.00",
        ship:"Free Shipping on Order $89+",
    },
    {
        img:"https://n.nordstrommedia.com/id/sr3/d69ab29d-5f23-4151-8c90-6290d1ac16c5.jpeg?h=365&w=240&dpr=2",
        brandName:"TOSCANA",
        type:"Sercing Ladder",
        price:"$90.00",
        off:"(9% off)",
        cost:"$98.00",
        ship:"Free Shipping on Order $89+",
    },

]



let home=(homeData)=>{
    
        let card=document.getElementById("container")
        //let card1=document.getElementById("card");
        append(homeData,card)
        // add(card1)

   
}
home(homeData)




