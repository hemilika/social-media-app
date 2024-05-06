const mongoose = require("mongoose");

const usersSchema = new mongoose.Schema({
  username: {
    type: "string",
    required: true,
  },
});

module.exports = mongoose.model("users", usersSchema);
