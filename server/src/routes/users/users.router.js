const express = require("express");

const { getAllUsers } = require("./users.controller");

const usersRouter = express.Router();

usersRouter.get("/users", getAllUsers);

module.exports = {
  usersRouter,
};
