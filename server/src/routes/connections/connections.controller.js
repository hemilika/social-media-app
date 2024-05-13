const { getUserConnections } = require("../../models/users/users.model");
const User = require("../../models/users/users.mongo");

const getAllConnections = async (req, res) => {
  const connections = await getUserConnections(req.userId);
  res.status(200).json(connections);
};

const addConnection = async (req, res) => {
  const newConnection = req.body;
  try {
    const result = await User.findByIdAndUpdate(
      req.userId,
      { $push: { connections: newConnection } },
      {
        new: true,
      }
    );
    return res.status(200).json(result);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Failed to update user" });
  }
};

module.exports = { getAllConnections, addConnection };
