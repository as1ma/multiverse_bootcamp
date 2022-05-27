function toppingChoice(){
    return new Promise((resolve,reject) => {
        setTimeout(()=> resolve("I'll have..."))},2000)
    
}

async function kitchen(){
    console.log("which toppings do you want?")
    let result = await toppingChoice()
    console.log(result)
    console.log("Chocolate")
    // let topping1 = prompt("Enter topping: ")
    console.log("Vanilla")
}

kitchen()
console.log("doing the dishes") //doing these tasks while awaiting for topping choice results
console.log("cleaning the tables")
console.log("taking orders")