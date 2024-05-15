const express = require("express");
const forumPostsRouter = express.Router();

const { getAllForumPosts, addForumPost } = require("./forum-posts.controller");

forumPostsRouter.get("/forum-posts", getAllForumPosts);
forumPostsRouter.post("/forum-posts", addForumPost);

module.exports = { forumPostsRouter };
