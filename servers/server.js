const express = require('express')

const app = express()
const port = 3000 //common practice for local hosts - certain ports are reserved for other things

app.use(express.static('public')) //folder name

app.listen(port,()=>{
    console.log(`Server listening at http://localhost:${port}`)
})

