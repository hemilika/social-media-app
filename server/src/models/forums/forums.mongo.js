const mongoose = require("mongoose");

const forumsSchema = new mongoose.Schema({
  forumName: {
    type: String,
    required: true,
  },
  forumDescription: {
    type: String,
    required: true,
  },
  technologies: {
    type: [String],
    required: false,
  },
});

module.exports = mongoose.model("forums", forumsSchema);
