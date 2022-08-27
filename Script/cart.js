import { navbar, append, add ,renderSuggestion} from "../components/navbar.js"

document.getElementById("navbarbody").innerHTML = navbar()
renderSuggestion()



let userData = JSON.parse(localStorage.getItem("userData")) 
// console.log(userName)
let display = (userData) =>{
  userData.forEach((el )=> {
    console.log(el.name)
    document.getElementById('uName').innerText = `Hi, ${el.name}`
  });
}
display(userData)
let addtocart = JSON.parse(localStorage.getItem("add")) || []
console.log(addtocart)

 

let total = document.createElement('p')

function renderItem() {
  let addtocart = JSON.parse(localStorage.getItem("add")) || []
  let total = document.querySelectorAll('.total-price')

  let price = 0

  for(let i = 0; i< addtocart.length; i++) {
    let el = addtocart[i]
    price += +el.price.split('$')[1] * el.count
    document.getElementById('qty').innerHTML = el.count;
  }
  total.forEach(el => {
    el.innerHTML = '$' + price.toFixed(2)
  })
}

renderItem()

let cart = (addtocart) => {


  let card = document.getElementById("bag_append")

  append(addtocart, card,renderItem)


}

let chekout=document.getElementById("checkout")
chekout.addEventListener("click",()=>{
  alert('Proceed to payment')
  window.location.href="payment.html"
})
cart(addtocart)

