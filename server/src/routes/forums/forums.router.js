const express = require("express");
const { getAllForums } = require("./forums.controller");

const forumsRouter = express.Router();

forumsRouter.get("/forums", getAllForums);

module.exports = { forumsRouter };
