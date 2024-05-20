const express = require("express");
const cors = require("cors");

const { usersRouter } = require("./routes/users/users.router");
const { postsRouter } = require("./routes/posts/posts.router");
const {
  connectionsRouter,
} = require("./routes/connections/connections.router");
const { forumsRouter } = require("./routes/forums/forums.router");
const {
  suggestionsRouter,
} = require("./routes/suggestions/suggestions.router");
const { authenticateToken } = require("./routes/login/authorization");
const { loginRouter } = require("./routes/login/login.router");
const { forumPostsRouter } = require("./routes/forum-posts/forum-posts.router");

const app = express();

app.use(cors("http://localhost:5173"));
app.use(express.json({ limit: "5mb" }));
app.use(express.urlencoded({ limit: "5mb", extended: true }));

app.use(authenticateToken);

app.use(loginRouter);

app.use(usersRouter);
app.use(postsRouter);
app.use(connectionsRouter);
app.use(forumsRouter);
app.use(suggestionsRouter);
app.use(forumPostsRouter);

module.exports = app;
