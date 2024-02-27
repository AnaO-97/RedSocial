const { Router } = require("express");
const { userHandlers, userMiddle } = require("../handlers/index");

const userRoutes = Router();

userRoutes.post("/register", userMiddle.validationsCreate, userHandlers.register);

module.exports = userRoutes;