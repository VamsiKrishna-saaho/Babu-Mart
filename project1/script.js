let div=document.getElementById("div1")
let basket=JSON.parse(localStorage.getItem('data'))||[]
shopData.map((x)=>{

  let {image,id,price}=x;
  div.innerHTML +=
  
`<div id="div2">
<img src="${image}" style="height: 200px; width: 200px;" ><br>
  <p>${id}</p><br>
  <p>$ ${price}</p><br>
  <button onclick="addCart('${image}','${id}','${price}')">addToCart</button>
  </div>
  `
})

function addCart(image,id,price){
  basket.push(
    {
      image:image,
      id:id,
      price:price
    }
  )
  localStorage.setItem('data',JSON.stringify(basket))
}


// ------------for  products 

let nav=document.getElementsByTagName("nav")
nav[0].children[1].onmouseover=function (){

  let aside=document.getElementsByTagName("aside")
  
  let res=aside[0].classList.toggle("true");
  if(res){
    aside[0].style.height="0px";
    aside[0].style.transitionDuration="1s"
  }
  else{
    aside[0].style.height="400px";
  }
}


//--------------------login

let nav1=document.getElementsByTagName("nav")
// console.log(nav1[0].children[5]);
nav1[0].children[5].onclick=function (){

  window.location.href="http://127.0.0.1:5501/project1/loginData/registerPage.html";
}

//---------------------help

let nav2=document.getElementsByTagName('nav')
nav2[0].children[6].onclick=function (){

  window.location.href="http://127.0.0.1:5501/project1/customerSupport/customer.html"
}

//-----------------------------------Data accsessing------------------

let ol=document.getElementsByTagName("ol")
ol[0].children[0].onclick=function (){

  window.location.href="http://127.0.0.1:5501/project1/ItemsData/mobile.html"
}

ol[0].children[1].onclick=function (){

  window.location.href="http://127.0.0.1:5501/project1/ItemsData/laptop.html"
}

ol[0].children[2].onclick=function (){

  window.location.href="http://127.0.0.1:5501/project1/ItemsData/tv.html"
}

ol[0].children[5].onclick=function (){

  window.location.href="http://127.0.0.1:5501/project1/ItemsData/washing.html"
}

ol[0].children[6].onclick=function (){

  window.location.href="http://127.0.0.1:5501/project1/ItemsData/mixer.html"
}

ol[0].children[7].onclick=function (){

  window.location.href="http://127.0.0.1:5501/project1/ItemsData/fridge.html"
}


