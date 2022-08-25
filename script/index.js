let All_images_link = [
  'https://n.nordstrommedia.com/id/7df6cb96-d13e-4b26-8add-8b444d6699c4.jpeg?h=720&w=1608',
  'https://n.nordstrommedia.com/id/1a9b8a06-2ef3-4cd5-a164-5b8ae4f63f9f.jpeg?h=720&w=1608',
  'https://n.nordstrommedia.com/id/66ec1e1a-8e4c-46ba-b17c-84f393dac1c3.jpeg?h=720&w=1608',
];

let left_button = document.getElementsByClassName('left-button');
let right_button = document.getElementsByClassName('right-button');
let imageList = document.getElementsByName('first_image');
let first_slide_bar = document.getElementsByClassName('first_slide_bar');
let image_position = 0;

setInterval(function () {
  image_position++;
  if (image_position == All_images_link.length) {
    image_position = 0;
  }
  imageList.src = All_images_link[image_position];
}, 5000);
right_button.addEventListener('click', function () {
  image_position++;
  if (image_position == All_images_link.length) {
    image_position = 0;
  }
  imageList.src = All_images_link[image_position];
});

left_button.addEventListener('click', function () {
  console.log(image_position);
  image_position--;
  if (image_position < 0) {
    image_position = All_images_link.length - 1;
  }
  imageList.src = All_images_link[image_position];
});





let first_grid_box_imageslink = [
  'https://n.nordstrommedia.com/id/156718be-867d-4a52-82f5-2bcb68f758ba.jpeg?h=429&w=279',
  'https://n.nordstrommedia.com/id/sr3/6bb77933-11a3-4b73-a01a-5febcfc9e523.jpeg?q=45&fit=fill&fm=jpg&dpr=2&h=408&w=266',
  'https://n.nordstrommedia.com/id/sr3/c296dba6-535d-4ab3-95ea-67e12208f7d0.jpeg?q=45&fit=fill&fm=jpg&dpr=2&h=408&w=266',
  'https://n.nordstrommedia.com/id/sr3/58f09acc-f998-43d3-beb9-8a64da5af102.jpeg?q=45&fit=fill&fm=jpg&dpr=2&h=408&w=266',
  'https://n.nordstrommedia.com/id/sr3/8b408af1-ef5c-480f-bc1c-796bed0b0af7.jpeg?q=45&fit=fill&fm=jpg&dpr=2&h=408&w=266',
  'https://n.nordstrommedia.com/id/sr3/9b82428d-0dbd-4727-a014-3c3f11ebd5b8.jpeg?q=45&fit=fill&fm=jpg&dpr=2&h=408&w=266',
  'https://n.nordstrommedia.com/id/sr3/be601138-5322-4643-aaa4-870d4f2b8ce4.jpeg?q=45&fit=fill&fm=jpg&dpr=2&h=408&w=266',
  'https://n.nordstrommedia.com/id/sr3/eb7f833d-6ce0-4f3d-8e65-3a87a889dcd8.jpeg?q=45&fit=fill&fm=jpg&dpr=2&h=408&w=266',
  'https://n.nordstrommedia.com/id/sr3/2fde39ee-6557-4434-9c78-8ec4a433e6ff.jpeg?q=45&fit=fill&fm=jpg&dpr=2&h=408&w=266',
  'https://n.nordstrommedia.com/id/sr3/327d15ba-44e6-465e-a662-ece9c4b0e8dd.jpeg?q=45&fit=fill&fm=jpg&dpr=2&h=408&w=266',
  'https://n.nordstrommedia.com/id/sr3/6f1fde5b-e59f-448a-aa8a-5f0b7940e857.jpeg?q=45&fit=fill&fm=jpg&dpr=2&h=408&w=266',
  'https://n.nordstrommedia.com/id/sr3/7a4fd5a1-c4f9-492e-835c-7fd4d46eb084.jpeg?q=45&fit=fill&fm=jpg&dpr=2&h=408&w=266',
  'https://n.nordstrommedia.com/id/sr3/f4c3e49d-081f-4232-a045-e338307e342b.jpeg?q=45&fit=fill&fm=jpg&dpr=2&h=408&w=266',
  'https://n.nordstrommedia.com/id/sr3/7c4210d9-f898-478a-8ae8-e0f1f4055f92.jpeg?q=45&fit=fill&fm=jpg&dpr=2&h=408&w=266',
  'https://n.nordstrommedia.com/id/sr3/16d25532-bef5-45cc-8958-155c4e6bfa44.jpeg?q=45&fit=fill&fm=jpg&dpr=2&h=408&w=266',
  'https://n.nordstrommedia.com/id/sr3/8e7351ac-111c-49ed-8970-a7115f141abb.jpeg?q=45&fit=fill&fm=jpg&dpr=2&h=408&w=266',
  'https://n.nordstrommedia.com/id/sr3/a6a3d8a6-d432-4e94-8204-516ccd8b1104.jpeg?q=45&fit=fill&fm=jpg&dpr=2&h=408&w=266',
  'https://n.nordstrommedia.com/id/sr3/2cfd535d-fb05-41eb-a1d8-aa147e70f307.jpeg?q=45&fit=fill&fm=jpg&dpr=2&h=408&w=266',
  'https://n.nordstrommedia.com/id/sr3/bdb385d6-6237-4b8a-b02b-d33ff209d3f8.jpeg?q=45&fit=fill&fm=jpg&dpr=2&h=408&w=266',
  "https://n.nordstrommedia.com/id/sr3/c5e3acbe-466c-44e8-b2ec-0a1a3c7c61aa.jpeg?q=45&fit=fill&fm=jpg&dpr=2&h=408&w=266",
  "https://n.nordstrommedia.com/id/sr3/d2f6ba1d-d185-4c77-b3df-a820b3573fee.jpeg?q=45&fit=fill&fm=jpg&dpr=2&h=408&w=266",
  "https://n.nordstrommedia.com/id/sr3/c50d445f-b480-4bac-824d-6ff6b8a82df4.jpeg?q=45&fit=fill&fm=jpg&dpr=2&h=408&w=266",
  "https://n.nordstrommedia.com/id/sr3/20798913-8452-43ca-974a-242603b68e7e.jpeg?q=45&fit=fill&fm=jpg&dpr=2&h=408&w=266",
  "https://n.nordstrommedia.com/id/sr3/fd926e28-5087-419a-bb24-169885e43b91.jpeg?q=45&fit=fill&fm=jpg&dpr=2&h=408&w=266",
];


let first_grid_box=document.getElementById("first_grid_box")
let first_grid_box_left_button = document.getElementById('first_grid_box-left_button');
let first_grid_box_right_button = document.getElementById('first_grid_box-right_button');


let first_grid_box_div1=document.getElementById("first_grid_box-div1")
let first_grid_box_div2=document.getElementById("first_grid_box-div2")
let first_grid_box_div3=document.getElementById("first_grid_box-div3")
let first_grid_box_div4=document.getElementById("first_grid_box-div4")
let first_grid_box_div5=document.getElementById("first_grid_box-div5")
let first_grid_box_div6=document.getElementById("first_grid_box-div6")

let image_number=5;

first_grid_box_right_button.addEventListener("click",function(){
  image_number++;
  if(image_number===first_grid_box_imageslink.length){
    image_number=6;
  }
  first_grid_box_div1.src=first_grid_box_imageslink[image_number]
  image_number++;
  first_grid_box_div2.src=first_grid_box_imageslink[image_number]
  image_number++;
  first_grid_box_div3.src=first_grid_box_imageslink[image_number]
  image_number++;
  first_grid_box_div4.src=first_grid_box_imageslink[image_number]
  image_number++;
  first_grid_box_div5.src=first_grid_box_imageslink[image_number]
  image_number++;
  first_grid_box_div6.src=first_grid_box_imageslink[image_number]
 
})


first_grid_box_left_button.addEventListener("click",function(){
  
  image_number--;
  if(image_number<0){
    image_number=first_grid_box_imageslink.length-1;
  }
  first_grid_box_div1.src=first_grid_box_imageslink[image_number]
  image_number--;
  first_grid_box_div2.src=first_grid_box_imageslink[image_number]
  image_number--;
  first_grid_box_div3.src=first_grid_box_imageslink[image_number]
  image_number--
  first_grid_box_div4.src=first_grid_box_imageslink[image_number]
  image_number--
  first_grid_box_div5.src=first_grid_box_imageslink[image_number]
  image_number--;
  first_grid_box_div6.src=first_grid_box_imageslink[image_number]
})






})


