const { DataTypes } = require("sequelize");

module.exports = ( database ) => {
    database.define("Post", {
        id : {
            type : DataTypes.UUID,
            defaultValue : DataTypes.UUIDV4,
            primaryKey : true,
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