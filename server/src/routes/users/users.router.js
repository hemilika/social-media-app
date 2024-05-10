const express = require("express");

const { getUser } = require("./users.controller");

const usersRouter = express.Router();

usersRouter.get("/users", getUser);

module.exports = {
  usersRouter,
};
