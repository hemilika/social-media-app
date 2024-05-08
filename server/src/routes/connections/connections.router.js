const express = require("express");

const { getAllConnections } = require("./connections.controller");

const connectionsRouter = express.Router();

connectionsRouter.get("/connections", getAllConnections);

module.exports = { connectionsRouter };
