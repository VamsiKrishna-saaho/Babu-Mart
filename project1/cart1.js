let table=document.getElementById("table")

let basket=JSON.parse(localStorage.getItem('data'))
basket.map((x)=>{
    let {image,id,price}=x;
    table.innerHTML +=`
    <tr>
        <td><img src='${image}' style="height: 200px; width: 200px;"></td>
        
        <td>${price}</td>
        <td><button onclick="remove(${id})">Remove &nbsp X</button><td>
    </tr>`
})

function remove(id){

basket=basket.filter((x)=> x.id!=id)

localStorage.setItem('data',JSON.stringify(basket))

}