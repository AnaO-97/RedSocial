const routes  = require("./Routes/index");
const morgan  = require("morgan");
const express = require("express");
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
app.use(bodyParser.json({ limit: '50mb' }));

app.use(morgan('dev'));

app.use("/", routes)

module.exports = app;