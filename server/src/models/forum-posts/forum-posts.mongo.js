const mongoose = require("mongoose");

const forumPostsSchema = new mongoose.Schema({
  posterUsername: {
    type: String,
    required: true,
  },
  datePosted: {
    type: Date,
    required: true,
  },
  description: {
    type: String,
    required: false,
  },
  likes: {
    type: Number,
    required: false,
  },
  comments: {
    type: [Object],
    required: false,
  },
  media: {
    type: String,
    required: false,
  },
  forumPosted: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("forumPosts", forumPostsSchema);
