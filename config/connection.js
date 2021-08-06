const Sequelize = require('sequelize');

require('dotenv').config();

const sequelize = new Sequelize('literary_times_db', 'username', 'password', {
    host: 'localhost', 
    dialect: 'mysql',
    port: 3306
})

module.exports = sequelize;