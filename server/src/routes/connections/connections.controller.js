const {
  getConnections,
} = require("../../models/connections/connections.model");

const Connections = require("../../models/connections/connections.mongo");

const getAllConnections = async (req, res) => {
  const connections = await getConnections();
  res.status(200).json(connections);
};

const addConnection = async (req, res) => {
  try {
    const { username, connections, fullName } = req.body;
    const connection = new Connections({
      username,
      connections,
      fullName,
    });
    await connection.save();
    return res.status(200).json("User connected successfully");
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Failed to connect user" });
  }
};

module.exports = { getAllConnections, addConnection };
