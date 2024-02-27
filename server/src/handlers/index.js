const validationsCreate = require("../middlewares/validationsCreate");
const register = require("./userRegister");
const login    = require("./userLogin");

const userHandlers = {
    login,
    register,    
}

const userMiddle = {
    validationsCreate
}

module.exports = {
    userHandlers,
    userMiddle
}