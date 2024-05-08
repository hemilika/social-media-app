const mongoose = require("mongoose");

const usersSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  connections: {
    type: Number,
    required: false,
  },
  forums: {
    type: String,
    required: false,
  },
  jobField: {
    type: String,
    required: false,
  },
  experience: {
    type: String,
    required: false,
  },
  education: {
    type: String,
    required: false,
  },
  degree: {
    type: String,
    required: false,
  },
  interests: {
    type: String,
    required: false,
  },
});

module.exports = mongoose.model("users", usersSchema);
