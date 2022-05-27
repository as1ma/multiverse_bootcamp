"use strict"
// const fetch = require("node-fetch");

axios.get("http://localhost:3001/all")
.then(function (response) {
    return response.data;
})  
.then(function (data){ 
    data.forEach(data => {
    const restaurantElement = document.createElement("li")
    const item = document.createTextNode(data.NAME)
    // const price = document.createTextNode(` £${data.PRICE}`)
    restaurantElement.appendChild(item)
    // restaurantElement.appendChild(price)
    app.appendChild(restaurantElement)
})
}).catch(function (error){ 
    console.log(error); 
})

function processForm(form) {
    fetch('http://localhost:3000/restaurants', {
        method: 'POST',
        body: new FormData(form)
    })
    .then(console.info)
    .catch(console.error)
}

// .then(function (data){ 
//     data.forEach(data => {
//     const menuItemElement = document.createElement("li")
//     const item = document.createTextNode(data.NAME)
//     // const price = document.createTextNode(` £${data.price}`)
//     menuItemElement.appendChild(item)
//     // menuItemElement.appendChild(price)
//     app.appendChild(menuItemElement)
// })
    
// const menuItemElement = document.createElement("li")

// menuItemsData.forEach(data => {
//     const menuItemElement = document.createElement("li")
//     const item = document.createTextNode(data.item)
//     const price = document.createTextNode(` £${data.price}`)
//     menuItemElement.appendChild(item)
//     menuItemElement.appendChild(price)
//     menuElement.appendChild(menuItemElement)
// })

// if(data.isVegetarian) {
//     const isVegIcon = document.createElement("img")
//     isVegIcon.setAttribute("src", "http://clipart-library.com/images/zTXodk5Ec.png")
//     isVegIcon.setAttribute("style", "height:1rem;margin-left:.25rem;")
//     menuItemElement.appendChild(isVegIcon)
// }
    
