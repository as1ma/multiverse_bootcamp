
class User{ //store points here
    points = []
}

function userGuess(){
    const prompt = require('prompt-sync')()
    const guess = prompt('What is your guess?')

    if (isNaN(guess)){
        throw new Error("Not a number!")
    }
    return guess
}

function continueGame(){ //use async + await!!!
    const prompt = require('prompt-sync')()
    cont = prompt('Continue(Y/N)?')
    return new Promise(function(resolve,reject){
        if(cont=="Y"){
            resolve(true)
            guess()
        }
        else if(cont == "N"){
            reject(false)
            console.log("Ending game..")
        }else{
            throw new Error("invalid option")
        }
    })
}

async function guess(){
    let points = 0
    const userNumber = await userGuess()
    let randomNumber = (Math.floor(Math.random() * 6) + 1)
    // console.log(randomNumber)

    const isContinuing = await continueGame()
    if(isContinuing){
        guess()
    }else{
        console.log("ending game..")
    }
    
    return new Promise(function(resolve, reject){
        if(userNumber == randomNumber){
            resolve("Gained 2 points!")
            points = points + 2
        }else if(userNumber - randomNumber == 1){
            resolve("Gained 1 point!")
            points +=1
        }else if(randomNumber - userNumber == 1){
            resolve("Gained 1 point!")
            points += 1
        }else{
            reject("No points gained!")
        }
        
        User.points.push(points)
    } 
    
    
)}



guess()
.then(function(success){console.log(success)})
.catch(function (error){console.error(error)})
.finally(()=>{console.log("Nice try")})

// continueGame()
// .then(function(cont){
//     if(result){
//         guess()
//     }else{
//         console.log("Ending game..")
//     }
// })
// .catch((function(error){console.log(error)}))



//to do:
//continue game
//user class stores points
//test cases

