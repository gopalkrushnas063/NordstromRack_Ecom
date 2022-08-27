


let append =(data,card) =>{
    data.forEach((el) => {

      let image=document.createElement("img")
        image.setAttribute("class","image")
        image.src=el.img;

        let brand=document.createElement("h5")
        brand.innerText=el.brandName;

        let sub=document.createElement("p")
        sub.setAttribute("class","type")
        sub.innerText=el.type;

        let div1=document.createElement("div");
        div1.setAttribute("class","prc")
        div1.style.display="flex";

        let span1=document.createElement("span")
        span1.setAttribute("class","span1")
        span1.innerText=el.price;

        let span2=document.createElement("span")
        span2.setAttribute("class","span2")
        span2.innerText=el.off;

        div1.append(span1,span2)

        let cst=document.createElement("p")
        cst.setAttribute("class","cst")
        cst.innerText=el.cost;

        let shp=document.createElement("p")
        shp.setAttribute("class","shp")
        shp.innerText=el.ship

        let div=document.createElement("div")
        
        div.onclick=()=>{
            add(el)
            
        }
        div.append(image,brand,sub,div1,cst,shp)
        card.append(div)
    });
}

 let add=(el)=>{

    let addtocart=JSON.parse(localStorage.getItem("add"))||[];
    addtocart.push(el);
    localStorage.setItem("add",JSON.stringify(addtocart))
    console.log(el)
    
    
}
export {append}





let userData = JSON.parse(localStorage.getItem("userData")) 
// console.log(userName)
let display = (userData) =>{
  userData.forEach(el => {
    console.log(el.name)
    document.getElementById('uName').innerText = `Hi, ${el.name}`
  });
}
display(userData)