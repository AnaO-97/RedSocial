require('dotenv').config();
const { Sequelize } = require("sequelize");
const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;

const postModel  = require("./models/Post");
const usersModel = require("./models/User");

const database = new Sequelize(
    `postgres://${ DB_USER }:${ DB_PASSWORD }@${ DB_HOST }/${ DB_NAME }`,
    { logging: false }
)

postModel( database );
usersModel( database );

const { User, Post } = database.models;
User.hasMany( Post );   //tiene varios ...
Post.belongsTo( User ); //pertenece a ...

module.exports = { database, ...database.models };