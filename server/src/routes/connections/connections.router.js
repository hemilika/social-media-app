const express = require("express");

const {
  getAllConnections,
  addConnection,
} = require("./connections.controller");

const connectionsRouter = express.Router();

connectionsRouter.get("/connections", getAllConnections);
connectionsRouter.post("/connections", addConnection);

module.exports = { connectionsRouter };
