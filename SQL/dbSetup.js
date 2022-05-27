

const db = new sqlite3.Database("./database.db", sqlite3.OPEN_READWRITE, (err)=>{
    if(err){
        return console.error(err.message)
    }else{
        console.log("Success!!")
    }
})
//CREATING TABLE
// db.run("CREATE TABLE users(first_name, last_name, username, password, email, id)")

//INSERTING NEW VALUES
// const sql = "INSERT INTO users VALUES('Sam', 'Test', 'STest', 'Test123', 'samantha.Test@multiverse.io', 2)"

// db.run(sql, (err)=>{
//     if(err){
//         return console.error(err.message)
//     }else{
//         console.log("Row Created!")
//     }
// });

//SELECTING ROWS TO SEE TABLE
// const selectSql = "SELECT * FROM users"; db.all(selectSql, (err, rows)=>{
//     if(err){
//         return console.error(err.message)
//     }else{
//         rows.forEach((row)=>{
//             console.log(row)})
//     }
// })

 //UPDATING
// const sql = "UPDATE users SET first_name = 'Samantha' WHERE first_name='Sam';"
// db.run(sql, (err)=>{
//     if(err){
//         return console.error(err.message);
//     }else{
//         console.log("Row Updated!");
//     }
//     });
    
//DELETING
// const sql = "DELETE FROM users WHERE first_name='Samantha';"
// db.run(sql, (err)=>{
//     if(err){
//         return console.error(err.message)
//     }else{
//         console.log("Deleted!")
//     }
// });

//CLOSING THE CONNECTION
// db.close((err) =>{
//     if(err){
//         return console.error(err.message);
//     }else{
//         console.log("DB Closed");
//     }
//     });
    

//AUTOINCREMENT
// db.run("CREATE TABLE COMPANY(ID INTEGER PRIMARY KEY AUTOINCREMENT, NAME TEXT NOT NULL,AGE INTEGER NOT NULL,ADDRESS,SALARY REAL);");
// db.run("INSERT INTO COMPANY (NAME,AGE,ADDRESS,SALARY)VALUES ('Jon', 29, 'New York', 35000.00)")

// const selectSql = "SELECT * FROM COMPANY"; db.all(selectSql, (err, rows)=>{
//     if(err){
//         return console.error(err.message)
//     }else{
//         rows.forEach((row)=>{
//             console.log(row)})
//         }
// })


//---------------------------------------------------------------------------------------------------------------------


//RESTAURANT DATABASE
// db.run("CREATE TABLE RESTAURANT(ID INTEGER PRIMARY KEY AUTOINCREMENT, NAME TEXT NOT NULL,IMAGELINK STRING)")
// db.run("INSERT INTO RESTAURANT(NAME,IMAGELINK)VALUES ('PFC', 'SOMELINK')")

// db.run("CREATE TABLE MENU(ID INTEGER PRIMARY KEY AUTOINCREMENT, TITLE TEXT NOT NULL)")
// db.run("INSERT INTO MENU(TITLE)VALUES ('PFC MENU')")

// db.run("CREATE TABLE MENUITEMS(ID INTEGER PRIMARY KEY AUTOINCREMENT, NAME TEXT NOT NULL,PRICE INTEGER NOT NULL)")
// db.run("INSERT INTO MENUITEMS(NAME,PRICE)VALUES ('Burger', '£2')")
// db.run("INSERT INTO MENUITEMS(NAME,PRICE)VALUES ('Burger meal', '£3.50')")
// db.run("INSERT INTO MENUITEMS(NAME,PRICE)VALUES ('Chips', '£1.50')")

// const selectSql = "SELECT * FROM MENUITEMS"; db.all(selectSql, (err, rows)=>{
//     if(err){
//         return console.error(err.message)
//     }else{
//         rows.forEach((row)=>{
//             console.log(row)})
//         }
// })

// const sql = "UPDATE MENUITEMS SET PRICE = '£5.99' WHERE NAME='Burger';"
// db.run(sql, (err)=>{
//     if(err){
//         return console.error(err.message);
//     }else{
//         console.log("Row Updated!");
//     }
//     });

// const sql = "DELETE FROM MENUITEMS WHERE NAME ='Burger';"
// db.run(sql, (err)=>{
//     if(err){
//         return console.error(err.message)
//     }else{
//         console.log("Deleted!")
//     }
// });

//Foreign Key
// db.run("CREATE TABLE Menu2 (id INT PRIMARY KEY, title TEXT, restaurant_id INT, FOREIGN KEY (restaurant_id) REFERENCES restaurants(id))")

//joining
// SELECT restaurants.name, menus.title 
// FROM restaurants 
// JOIN menus ON restaurants.id = menus.restaurant_id 
// WHERE restaurants.id = 1;

//USER TABLE WITH PASSWORD TO LOG IN. FILTER TASKS DISPLAY ETC