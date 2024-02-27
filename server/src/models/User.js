const { DataTypes } = require("sequelize");

module.exports = (database) => {
    database.define("User", {
        id : {
            type : DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        fullName : {
            type : DataTypes.STRING(100),
            allowNull: false,
        },
        age : {
            type : DataTypes.INTEGER,
            allowNull: false,
        },
        email : {
            type : DataTypes.STRING(100),
            unique: true,
            allowNull: false,
        },
        password : {
            type : DataTypes.STRING(100),
            allowNull: false,
        },
        deletedAt : {
            type : DataTypes.DATE
        }
    })
};