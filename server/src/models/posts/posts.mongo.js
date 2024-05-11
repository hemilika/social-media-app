const mongoose = require("mongoose");

const postsSchema = new mongoose.Schema({
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
  profilePicture: {
    type: String,
    required: false,
  },
});

module.exports = mongoose.model("posts", postsSchema);
