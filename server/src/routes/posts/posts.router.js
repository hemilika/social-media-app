const express = require("express");

const { getAllPosts } = require("./posts.controller");

const postsRouter = express.Router();

postsRouter.get("/posts", getAllPosts);

module.exports = {
  postsRouter,
};
