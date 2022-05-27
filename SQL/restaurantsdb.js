const sqlite3 = require("sqlite3")

const db = new sqlite3.Database("./restaurants.db", sqlite3.OPEN_READWRITE, (err)=>{
    if(err){
        return console.error(err.message)
    }else{
        console.log("Success!!")
    }
})

// db.run("CREATE TABLE RESTAURANT(ID INTEGER PRIMARY KEY AUTOINCREMENT, NAME TEXT NOT NULL,IMAGELINK STRING)")
// db.run("INSERT INTO RESTAURANT(NAME,IMAGELINK)VALUES ('PFC', 'SOMELINK')")

// db.run("CREATE TABLE MENU(ID INTEGER PRIMARY KEY AUTOINCREMENT, TITLE TEXT NOT NULL)")
// db.run("INSERT INTO MENU(TITLE)VALUES ('PFC MENU')")

// db.run("CREATE TABLE MENUITEMS(ID INTEGER PRIMARY KEY AUTOINCREMENT, NAME TEXT NOT NULL,PRICE INTEGER NOT NULL)")
// db.run("INSERT INTO MENUITEMS(NAME,PRICE)VALUES ('Burger', 2)")
// db.run("INSERT INTO MENUITEMS(NAME,PRICE)VALUES ('Burger meal', 3.50)")
// db.run("INSERT INTO MENUITEMS(NAME,PRICE)VALUES ('Chips', 1.50)")

// const sql = "DELETE FROM MENUITEMS WHERE NAME ='chips';"
// db.run(sql, (err)=>{
//     if(err){
//         return console.error(err.message)
//     }else{
//         console.log("Deleted!")
//     }
// });

//Foreign Key
// db.run("CREATE TABLE Menu_2 (id INTEGER PRIMARY KEY, title TEXT, restaurant_id INTEGER, FOREIGN KEY (restaurant_id) REFERENCES restaurant(id))")
// db.run("INSERT INTO Menu_2(TITLE, restaurant_id)VALUES ('Vegan MENU','1')")

//Joining
db.run("SELECT Menu_2.TITLE as 'Menu Name', MENUITEMS.NAME as 'Menu Items Name' FROM Menu_2 JOIN MENUITEMS ON Menu_2.id = MENUITEMS.id WHERE Menu_2.id = 1;")


const selectSQL = "SELECT * FROM Menu_2"
db.all(selectSQL, (err, rows)=>{
    if(err){
        return console.error(err.message)
    }else{
        rows.forEach((row)=>{
            console.log(row)})
    }
})



//TO DO:
// 1. Modify your tables as follows:
// add a restaurant_id column to the menus table and mark it as a FOREIGN KEY
// add a menu_id column to the MENU_ITEM table and mark it as a FOREIGN KEY
// ALTER TABLE Menu ADD restaurant_id varchar(255);
// ALTER TABLE Menu ADD restaurant_id FOREIGN KEY

//////examples
// SELECT restaurants.name, menus.title 
// FROM restaurants 
// JOIN menus ON restaurants.id = menus.restaurant_id 
// WHERE restaurants.id = 1;


// const alterSQL = "ALTER TABLE Menu ADD restaurant_id FOREIGN KEY"
// db.all(alterSQL, (err, rows)=>{
//     if(err){
//         return console.error(err.message)
//     }else{
//         rows.forEach((row)=>{
//             console.log(row)})
//     }
// })

// const sql = "ALTER TABLE MENUS DROP COLUMN PRICE";
// db.run(sql, (err)=>{    
//     if(err)
//     {
//         return console.error(err.message);
//     }
//     else{
//         console.log("Column deleted!");
//     }
// });

// Write some JOIN statements that do the following:
// 2. SELECT the name of a menu from a specific restaurant and list all the menu items on this menu



// 3. SELECT all the restaurants with a count of the number of menus each restaurant has. Hint: research the COUNT and GROUP BY keywords and ORDER BY keywords.
// const selectSQL = "SELECT * FROM MENUITEMS ORDER BY NAME DESC"
// db.all(selectSQL, (err, rows)=>{
//     if(err){
//         return console.error(err.message)
//     }else{
//         rows.forEach((row)=>{
//             console.log(row)})
//     }
// })


// 4. SELECT all the menus, with the total cost of all the menu items summed, and have the list in descending order (most expensive first). Hint: research the SUM, GROUP BY and ORDER BY keywords.
// const sumSQL = "SELECT SUM(PRICE) FROM MENUITEMS"
// db.all(sumSQL, (err, rows)=>{
//     if(err){
//         return console.error(err.message)
//     }else{
//         rows.forEach((row)=>{
//             console.log(row)})
//     }
// })

module.exports = {restaurantsdb}