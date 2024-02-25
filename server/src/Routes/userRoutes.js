const { Router } = require("express");
const { userHandlers } = require("../handlers/index");

const userRoutes = Router();

userRoutes.post("/register", userHandlers.register);

module.exports = userRoutes;