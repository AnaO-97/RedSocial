const validationsPassword = require("../middlewares/validationsPassword");
const validationsCreate = require("../middlewares/validationsCreate");
const register = require("./userRegister");
const login    = require("./userLogin");

const userHandlers = {
    login,
    register,    
}

const userMiddle = {
    validationsCreate,
    validationsPassword
}

module.exports = {
    userHandlers,
    userMiddle
}