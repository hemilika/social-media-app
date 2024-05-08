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
  forumMembers: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("forums", forumsSchema);
