const validationsCreate   = require("../middlewares/validationsCreate");
const validationsPassword = require("../middlewares/validationsPassword");
const JWTValidation= require("../middlewares/JWTValidation");
const JWTGenerate  = require("../middlewares/JWTGenerate");
const register     = require("./userRegister");
const login        = require("./userLogin");
const userDelete   = require("./userDelete");
const userChanges  = require("./userChanges");

const postNew = require("./postNew");
const postsAll = require("./postsAll");

const userHandlers = {
    login,
    register,
    userDelete,
    userChanges,
};

const userMiddle = {
    JWTGenerate,
    JWTValidation,
    validationsCreate,
    validationsPassword
};

const postHandlers = {
    postNew,
    postsAll,
};

module.exports = {
    userHandlers,
    userMiddle,
    postHandlers,
};