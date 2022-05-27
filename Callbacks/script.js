let timeout;

// function myFunction(){
//     timeout = setTimeout(alertFunc,3000)
// }

// function alertFunc(){
//     console.log("Hello!")
// }

// myFunction()


// function sayHello(callback){
//     timeout = setTimeout(callback, 3000)
// }

// function callback(){
//     console.log("Hello")
// }

// sayHello(callback)


// function DoHomework(finishedHomework){

//     timeout = setTimeout(finishedHomework("Maths"),2000)
//     // timeout = setTimeout(finishedHomework("English"),5000)

// }

function DoHomework(finishedHomework){

    setTimeout(function () {finishedHomework("maths");}, 3000);
    setTimeout(function () {finishedHomework("english");}, 8000); //5 seconds - but starts at the same time as maths so +3
    setTimeout(function () {finishedHomework("science");}, 15000);
    setTimeout(function () {finishedHomework("callback");}, 25000);
}
// DoHomework(finisedHomework("maths"))
DoHomework(function (subject) 
          {
            console.log(`Finished my ${subject} homework`)
          });


