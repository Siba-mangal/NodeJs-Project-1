const Sequelize = require("sequelize");
const sequelize = new Sequelize("food-order", "root", "Siba@2518", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
