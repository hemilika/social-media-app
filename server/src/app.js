const express = require("express");
const cors = require("cors");

const { usersRouter } = require("./routes/users/users.router");
const { postsRouter } = require("./routes/posts/posts.router");
const {
  connectionsRouter,
} = require("./routes/connections/connections.router");
const app = express();

app.use(cors("http://localhost:5173"));
app.use(express.json());
app.use(usersRouter);
app.use(postsRouter);
app.use(connectionsRouter);

module.exports = app;
