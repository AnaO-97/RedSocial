const { DataTypes } = require("sequelize");

module.exports = ( database ) => {
    database.define("Post", {
        id : {
            type : DataTypes.INTEGER,
            primaryKey : true,
            autoIncrement : true,
        },
        title : {
            type : DataTypes.STRING(100),
        },
        content : {
            type : DataTypes.TEXT
        },
        likes : {
            type : DataTypes.INTEGER
        },
        deletedAt : {
            type : DataTypes.DATE
        }
    })
};