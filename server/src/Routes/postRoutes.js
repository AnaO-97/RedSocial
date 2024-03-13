const { Router } = require("express");
const { postHandlers }  = require("../handlers/index");

const postRoutes = Router();

postRoutes.post("/", postHandlers.postNew);

postRoutes.get("/all", postHandlers.postsAll);

postRoutes.get("/allByUser");

module.exports = postRoutes;