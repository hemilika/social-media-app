const express = require("express");
const loginRouter = express.Router();

const { registerController, loginController } = require("./login.controller");

// User registration
loginRouter.post("/register", registerController);

// User login
loginRouter.post("/login", loginController);

module.exports = { loginRouter };
