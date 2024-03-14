let div=document.getElementById("div2")

washingData.map((x)=>{

    let {id,image,name,price}=x;
    div.innerHTML +=
    `<div class="div3">
    <img src="${image}">
    <span>${name}</span>
    <span>${price}</span>
    <button>AddToCart</button>
    </div>
    `
})


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
