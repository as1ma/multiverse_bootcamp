const express = require('express')
const app = express()
const port = 3000 //common practice for local hosts - certain ports are reserved for other things

app.use(express.static('public')) //folder name

app.listen(port,()=>{
    console.log(`Server listening at http://localhost:${port}`)
})

//can include this in server file
app.get("/now", (request, response) => {
    const date = new Date();
    response.send(date);
});

app.get("/flipcoin", (request, response) => {
    const randomNum = Math.floor(Math.random() * 2)
    if (randomNum == "1"){
        response.send("heads")
    }else{
        response.send("Tails")
    }
 
});


