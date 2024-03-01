const validationsCreate   = require("../middlewares/validationsCreate");
const validationsPassword = require("../middlewares/validationsPassword");
const JWTValidation= require("../middlewares/JWTValidation");
const JWTGenerate  = require("../middlewares/JWTGenerate");
const register     = require("./userRegister");
const login        = require("./userLogin");
const userDelete   = require("./userDelete");
const userChanges  = require("./userChanges");

const userHandlers = {
    login,
    register,
    userDelete,
    userChanges,
}

const userMiddle = {
    JWTGenerate,
    JWTValidation,
    validationsCreate,
    validationsPassword
}

module.exports = {
    userHandlers,
    userMiddle
}