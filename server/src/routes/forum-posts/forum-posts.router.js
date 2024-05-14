const express = require("express");
const forumPostsRouter = express.Router();

const { getAllForumPosts } = require("./forum-posts.controller");

forumPostsRouter.get("/forum-posts", getAllForumPosts);

module.exports = { forumPostsRouter };
