const { Router }  = require("express");
const JWTGenerate = require("../middlewares/JWTGenerate");
const { userHandlers, userMiddle } = require("../handlers/index");

const userRoutes = Router();

userRoutes.post("/register", 
    userMiddle.validationsCreate, 
    userMiddle.validationsPassword,
    userHandlers.register,
    JWTGenerate,
);

module.exports = userRoutes;