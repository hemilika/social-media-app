const express = require("express");

const { getUser, updateUser } = require("./users.controller");

const usersRouter = express.Router();

usersRouter.get("/users", getUser);
usersRouter.patch("/users", updateUser);

module.exports = {
  usersRouter,
};
