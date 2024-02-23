const { DataTypes } = require("sequelize");

module.exports = (database) => {
    database.define("User", {
        id : {
            type : DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        fullName : {
            type : DataTypes.STRING
        },
        age : {
            type : DataTypes.INTEGER
        },
        email : {
            type : DataTypes.STRING,
            unique: true,
            allowNull: false,
        },
        password : {
            type : DataTypes.STRING
        },
        post : {
            type : DataTypes.STRING
        },
        deletedAt : {
            type : DataTypes.DATE
        }
    })
}