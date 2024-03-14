let div=document.getElementById('div1')
console.log(div);
let div3=document.getElementById('div3')
let btr=document.getElementById('btr1')
btr.onclick=function (){

    let input=document.getElementById('input').value
    div.innerHTML +=`
    <span>${input}</span>`

    if(input==="How to purchase the item"){
        div3.innerHTML ="That functionality under construction"
    }
    else if(input==="When new items available"){
        div3.innerHTML="Updated Soon"
    }
}

let input2=document.getElementById('input').value

if(input2==="")
{
    div3.innerHTML="Hello Sir how can i help you ?"
}

