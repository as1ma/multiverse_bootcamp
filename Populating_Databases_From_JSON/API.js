const express = require('express')
const app = express()
const port = 3001 //common practice for local hosts - certain ports are reserved for other things

//postman
app.use(express.urlencoded({extended: true}))
app.use(express.json())

// Add Access Control Allow Origin headers
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "http://127.0.0.1:5500");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  });
  /////////////////////////////////////////  
  
//CREATING A RESTAURANT 
// app.post('/restaurants/8', (req, res) => {
//     console.log(req.body);
//     // use the data in req.body to add a new restaurant to the database
//     res.sendStatus(201);
//     })

//UPDATING USING POSTMAN
app.put('/restaurants/:id', function(req, res){
    const index = req.params.id;
    console.log("Updating Restaurant " + index + " setting Name to " + req.body.Name + ", setting Location to " + req.body.Location);
    });
    
 //DELETING A RESTAURANT
 app.delete("/restaurants/:id", (req, res) => {
    const index = req.params.id;
    console.log("Deleting Restaurant " + index);
})

//server side validation
const { check, validationResult } = require('express-validator');

app.post('/restaurants', [
    check('name').not().isEmpty().trim().escape()
], async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }else{
        res.sendStatus(201)
    }})
    
const sqlite3 = require("sqlite3")
const db = new sqlite3.Database(
	"./database.db",
	sqlite3.OPEN_READWRITE,
	(err) => {
		if (err) {
			return console.error(err.message);
		} else {
			console.log("\nSuccess!\n"); 
		}
	}
);

app.use(express.static('public')) //folder name

app.listen(port,()=>{
    console.log(`Server listening at http://localhost:${port}`)
})

//can include this in server file
// app.get("/now", (request, response) => {
//     const date = new Date();
//     response.send(date);
// });

app.get("/all",(request,response)=>{
    const selectSql = "SELECT * FROM RESTAURANT"; db.all(selectSql, (err, rows)=>{
    if(err){
        return response.error(err.message)
    }else{
        response.send(rows)}
    }
)
})

app.get("/menus",(request,response)=>{
    const selectSql = "SELECT * FROM MENU"; db.all(selectSql, (err, rows)=>{
    if(err){
        return console.error(err.message)
    }else{
        response.send(rows)
    }
})
})


app.get("/menuitems",(request,response)=>{
    const selectSql = "SELECT * FROM MENUITEM"; db.all(selectSql, (err, rows)=>{
    if(err){
        return console.error(err.message)
    }else{
        response.send(rows)
    }
})
})

app.get("/bayroot",(request,response)=>{
    const selectSql = "SELECT * FROM RESTAURANT WHERE RESTAURANT_NAME = 'Bayroot'"; db.all(selectSql, (err, rows)=>{
    if(err){
        return console.error(err.message)
    }else{
        response.send(rows)
    }
})
})


app.get("/restaurants/:id", (request,response)=>{
    console.log(request.params)
    const selectSql = `SELECT * FROM RESTAURANT WHERE ID = ${request.params.id}`; 
    db.all(selectSql, (err, rows)=>{
        if(err){
            response.error(err.message)
        }else{
            response.send(rows)}
        }
    )
})