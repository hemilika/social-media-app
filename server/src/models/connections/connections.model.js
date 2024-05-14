const users = require("../users/users.mongo");

const getConnections = async () => {
  try {
    const connectionsData = users.find().exec();
    return connectionsData;
  } catch (err) {
    console.log(err);
  }
};

module.exports = { getConnections };
