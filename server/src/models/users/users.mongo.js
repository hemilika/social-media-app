const mongoose = require("mongoose");

const usersSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  dateJoined: {
    type: Date,
    required: true,
  },
  profilePicture: {
    type: String,
    required: false,
  },
  username: {
    type: String,
    unique: true,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  forums: {
    type: [String],
    required: false,
  },
  jobField: {
    type: String,
    required: false,
  },
  experience: {
    type: Number,
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
    type: [Object],
    required: false,
  },
  connections: {
    type: [Object],
    required: false,
  },
});

module.exports = mongoose.model("users", usersSchema);
