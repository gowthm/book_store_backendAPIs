const { Sequelize, DataTypes } = require('sequelize');
const config = require('../config/dbConfig');

const Users = config.define(
    "user",
    {
        firstName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: true
        }
    }
)

module.exports = Users