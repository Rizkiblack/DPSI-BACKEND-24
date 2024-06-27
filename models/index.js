 // models/index.js
 const { Sequelize } = require('sequelize');
 const sequelize = new Sequelize('dpsi', 'root', '', {
    host: 'localhost',
 dialect: 'mysql'
 });

 module.exports = sequelize;