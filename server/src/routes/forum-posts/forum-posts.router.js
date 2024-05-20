const express = require("express");
const forumPostsRouter = express.Router();

const {
  getAllForumPosts,
  addForumPost,
  likeForumPost,
  deleteForumPost,
  commentForumPost,
} = require("./forum-posts.controller");

forumPostsRouter.get("/forum-posts", getAllForumPosts);
forumPostsRouter.post("/forum-posts", addForumPost);
forumPostsRouter.post("/forum-posts/:id/comment", commentForumPost);
forumPostsRouter.post("/forum-posts/:id/like", likeForumPost);
forumPostsRouter.delete("/forum-posts/:id/delete", deleteForumPost);

module.exports = { forumPostsRouter };
