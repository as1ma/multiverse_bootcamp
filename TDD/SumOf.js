
class Maths{
    sumOf(a,b){
        // if(isNaN(a) || isNaN(b)){
        //     // throw new TypeError("Inputs must be numbers")
        //     return "not a number"
        // }
        return a+b
    }
    multiply(a,b){
        return a*b
    }


}

// console.log(sumOf(1,'b'))
// console.log(sumOf(10,20))
// console.log(sumOf(12,24))
// console.log(sumOf(13,2))
// console.log(sumOf(109,2))

//npm init
//npm install jest --save-dev
//npm i-s jest
module.exports = Maths //exports class