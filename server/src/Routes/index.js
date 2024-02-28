const { Router } = require("express");
const userRoutes = require("./userRoutes");
const postRoutes = require("./postRoutes");
const JWTValidation = require("../middlewares/JWTValidation");

const routes = Router();

routes.use("/user", userRoutes);
routes.use("/post", JWTValidation, postRoutes);


module.exports = routes;