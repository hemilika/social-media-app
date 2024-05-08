const { getPosts } = require("../../models/posts/posts.model");

const getAllPosts = async (req, res) => {
  const posts = await getPosts();
  return res.status(200).json(posts);
};

module.exports = { getAllPosts };
