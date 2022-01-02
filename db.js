const { Sequelize } = require("sequelize");
var sequelize = new Sequelize('postgres://postgres:1234@localhost:5432/demo_database');
try {
     sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
module.exports.sequelize=sequelize;
