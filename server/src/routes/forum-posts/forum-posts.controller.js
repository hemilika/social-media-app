const { getForumPosts } = require("../../models/forum-posts/forum-posts.model");

const getAllForumPosts = async (req, res) => {
  try {
    const forumPosts = await getForumPosts();
    return res.status(200).json(forumPosts);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = { getAllForumPosts };
