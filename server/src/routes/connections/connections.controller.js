const {
  getConnections,
} = require("../../models/connections/connections.model");

const getAllConnections = async (req, res) => {
  const connections = await getConnections();
  res.status(200).json(connections);
};

module.exports = { getAllConnections };
