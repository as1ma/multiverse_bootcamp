// // function fiftyFifty() { return Math.round(Math.random()); } 

// function sayHello() {   
//     return new Promise(function (resolve, reject){                       
//         setTimeout(function (){                         
//             if (fiftyFifty()){  //Function returns 1 or 0                  
//                 resolve("Amazing!"); 
//             } 
//             else {reject("We messed up somewhere...")}}, 5000);   }); } 
        
        
// sayHello()   
// .then(function (success) {     console.log(success);   })   
// .catch(function (error) {     console.error(error);   })   
// .finally(() => {     console.log("Done");   });



function bakeCakes(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            if(true){
                resolve("Bake 12 cakes")
            }
            else{
                reject("No cakes baked")
            }
        })
    })
}

bakeCakes()
.then(function(success){console.log(success)})
.catch(function (error){console.error(error)})
.finally(()=>{console.log("Party")})