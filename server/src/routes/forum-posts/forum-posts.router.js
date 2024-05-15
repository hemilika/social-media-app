const express = require("express");
const forumPostsRouter = express.Router();

const {
  getAllForumPosts,
  addForumPost,
  likeForumPost,
} = require("./forum-posts.controller");

forumPostsRouter.get("/forum-posts", getAllForumPosts);
forumPostsRouter.post("/forum-posts", addForumPost);
forumPostsRouter.post("/forum-posts/:id/like", likeForumPost);

module.exports = { forumPostsRouter };
