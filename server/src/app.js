const express = require("express");

const { usersRouter } = require("./routes/users/users.router");

const app = express();

app.use(express.json());
app.use(usersRouter);

module.exports = app;
