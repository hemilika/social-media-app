const express = require("express");

const { usersRouter } = require("./routes/users/users.router");
const { postsRouter } = require("./routes/posts/posts.router");

const app = express();

app.use(express.json());
app.use(usersRouter);
app.use(postsRouter);

module.exports = app;
