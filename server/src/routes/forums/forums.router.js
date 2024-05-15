const express = require("express");
const { getAllForums, createForum } = require("./forums.controller");

const forumsRouter = express.Router();

forumsRouter.get("/forums", getAllForums);
forumsRouter.get("/forum/names", getAllForums);
forumsRouter.post("/forums", createForum);

module.exports = { forumsRouter };
