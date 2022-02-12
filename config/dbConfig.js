const env = require('dotenv').config();
const dbName = process.env.DBNAME;
const userName = process.env.USERNAME;
const passWord = process.env.PASSWORD;
const {Sequelize} = require('sequelize');

const sequelize = new Sequelize('postgres://postgres:'+passWord+'@localhost:5434/'+dbName) // Example for postgres

// const sequelize = new Sequelize(dbName, userName, passWord, {
//     host: 'localhost',
//     dialect: 'postgres'
// })

// autheticate connection
sequelize.authenticate()
.then(() => {
    console.log("Connection has benn established successfully")
})
.catch((err) => {
    console.log('Unable to connect to database')
})

module.exports = sequelize;