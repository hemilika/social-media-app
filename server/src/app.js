const express = require("express");
const cors = require("cors");

const { usersRouter } = require("./routes/users/users.router");
const { postsRouter } = require("./routes/posts/posts.router");
const {
  connectionsRouter,
} = require("./routes/connections/connections.router");
const { forumsRouter } = require("./routes/forums/forums.router");

const app = express();

app.use(cors("http://localhost:5173"));
app.use(express.json());
app.use(usersRouter);
app.use(postsRouter);
app.use(connectionsRouter);
app.use(forumsRouter);

module.exports = app;
