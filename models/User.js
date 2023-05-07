const Sequelize = require("sequelize");

const sequelize = require("../util/database");

const User = sequelize.define("users", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  price: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  productName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  tableNo: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = User;
