const mongoose = require("mongoose");

const connectionsSchema = new mongoose.Schema({
  yourConnections: {
    type: [Object],
    required: true,
  },
});

module.exports = mongoose.model("connections", connectionsSchema);
