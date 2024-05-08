const connections = require("./connections.mongo");

const getConnections = async () => {
  try {
    const connectionsData = connections.find();
    return connectionsData;
  } catch (err) {
    console.log(err);
  }
};

module.exports = { getConnections };
