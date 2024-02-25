const { DataTypes } = require("sequelize");

module.exports = (database) => {
    database.define("User", {
        id : {
            type : DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        fullName : {
            type : DataTypes.STRING(100)
        },
        age : {
            type : DataTypes.INTEGER
        },
        email : {
            type : DataTypes.STRING(100),
            unique: true,
            allowNull: false,
        },
        password : {
            type : DataTypes.STRING(100)
        },
        deletedAt : {
            type : DataTypes.DATE
        }
    })
};