const { Router } = require("express");
const { userHandlers, userMiddle } = require("../handlers/index");

const userRoutes = Router();

userRoutes.post("/register", 
        userMiddle.validationsCreate, 
        userMiddle.validationsPassword,
        userHandlers.register
);

module.exports = userRoutes;