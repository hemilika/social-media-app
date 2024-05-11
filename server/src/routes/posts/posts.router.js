const express = require("express");

const { getAllPosts, addPost, deletePost } = require("./posts.controller");

const postsRouter = express.Router();

postsRouter.get("/posts", getAllPosts);
postsRouter.post("/posts", addPost);
postsRouter.delete("/posts", deletePost);

module.exports = {
  postsRouter,
};
