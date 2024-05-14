const { getUserConnections } = require("../../models/users/users.model");
const { getLoggedInUser } = require("../users/users.model");

const getSuggestions = async (req) => {
  const { userId } = req;

  const connectionsData = await getUserConnections(userId);
  const connectedUsername = connectionsData[0].connections.map(
    (connection) => connection.username
  );

  let users = await getLoggedInUser();

  users = users.filter((user) => user._id.toString() !== userId);

  const suggestions = users.filter(
    (user) => !connectedUsername.includes(user.username)
  );

  return suggestions;
};

module.exports = { getSuggestions };
