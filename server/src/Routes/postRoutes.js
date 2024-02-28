const { Router } = require("express");

const postRoutes = Router();

postRoutes.get("/all", (req, res)=>{
    const post = [
        {id: 1,
        text : "HOLA MUNDO",},
        {id: 2,
        text : "ARCOÍRIS",},
        {id: 3,
        text : "MUNDO FELIX",}
    ]

    res.status(200).json(post);
})

module.exports = postRoutes;