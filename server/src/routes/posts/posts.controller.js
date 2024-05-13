const { getPosts } = require("../../models/posts/posts.model");
const Posts = require("../../models/posts/posts.mongo");

const getAllPosts = async (req, res) => {
  const posts = await getPosts();
  return res.status(200).json(posts);
};

const addPost = async (req, res) => {
  try {
    const { description, posterUsername, profilePicture, datePosted, media } =
      req.body;

    const post = new Posts({
      posterUsername: posterUsername,
      description: description,
      profilePicture: profilePicture,
      media: media,
      datePosted: datePosted,
      likes: 0,
      comments: [],
    });

    await post.save();
    return res.status(201).json(post);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Couldn't add post" });
  }
};

const deletePost = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({ message: "Invalid ID provided" });
    }

    await Posts.findByIdAndDelete(id);
    return res.status(200).json({ message: "Post deleted successfully" });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Couldn't delete post" });
  }
};

module.exports = { getAllPosts, addPost, deletePost };
