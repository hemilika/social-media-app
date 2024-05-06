const mongoose = require("mongoose");

const postsSchema = new mongoose.Schema({
  posterUsername: {
    type: "String",
    required: true,
  },
  datePosted: {
    type: "String",
    required: true,
  },
  description: {
    type: "String",
    required: false,
  },
  likes: {
    type: "String",
    required: false,
  },
  comments: {
    type: "String",
    required: false,
  },
});

module.exports = mongoose.model("Posts", postsSchema);
