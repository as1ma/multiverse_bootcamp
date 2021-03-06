const { sequelize, DataTypes, Model } = require("../db");

class Restaurant extends Model {}

Restaurant.init(
  {
    // Model attributes are defined here
    name: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    imageURL: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    // Other model options go here
    sequelize, // We need to pass the connection instance
  }
);

// class Menu extends Model{}

// Menu.init(
//   {

//   }
// )


// class MenuItems extends Model{}
// MenuItems.init({
  
// })
 
Restaurant.hasMany(Menu, {as: "menus",foreign_key: "restaurant_id"})
module.exports = Restaurant;