const { getForumPosts } = require("../../models/forum-posts/forum-posts.model");
const ForumPost = require("../../models/forum-posts/forum-posts.mongo");

const getAllForumPosts = async (req, res) => {
  try {
    const forumPosts = await getForumPosts();
    return res.status(200).json(forumPosts);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const addForumPost = async (req, res) => {
  try {
    const {
      forumPosted,
      description,
      posterUsername,
      profilePicture,
      datePosted,
      media,
    } = req.body;

    const post = new ForumPost({
      posterUsername: posterUsername,
      description: description,
      profilePicture: profilePicture,
      media: media || "",
      datePosted: datePosted,
      likes: 0,
      comments: [],
      forumPosted: forumPosted,
    });

    await post.save();
    return res.status(201).json(post);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Couldn't add post" });
  }
};

const likeForumPost = async (req, res) => {
  try {
    const { post } = req.body;
    const { _id } = post;
    const result = await ForumPost.findByIdAndUpdate(
      _id,
      { $inc: { likes: 1 } },
      {
        new: true,
      }
    );
    return res.status(201).json(result);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Couldn't like forum post" });
  }
};
const deleteForumPost = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await ForumPost.findByIdAndDelete(id);
    return res.status(201).json(result);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Couldn't delete forum post" });
  }
};

module.exports = {
  getAllForumPosts,
  addForumPost,
  likeForumPost,
  deleteForumPost,
};
