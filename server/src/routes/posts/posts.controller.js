const { posts } = require("../../models/posts/posts.model");

const getAllPosts = (req, res) => {
  return res.status(200).json(posts);
};

module.exports = { getAllPosts };
