const express = require("express");

const {
  getAllPosts,
  addPost,
  deletePost,
  likePost,
  commentPost,
} = require("./posts.controller");

const postsRouter = express.Router();

postsRouter.get("/posts", getAllPosts);
postsRouter.post("/posts", addPost);
postsRouter.delete("/posts/:id", deletePost);
postsRouter.post("/posts/:id/like", likePost);
postsRouter.post("/posts/:id/comment", commentPost);

module.exports = {
  postsRouter,
};
