const mongoose = require("mongoose");

const connectionsSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  connections: {
    type: Number,
    required: true,
  },
  fullName: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("connections", connectionsSchema);
