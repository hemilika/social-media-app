const { getConnections } = require("../connections/connections.model");
const { getLoggedInUser } = require("../users/users.model");

const getSuggestions = async (req) => {
  const { userId } = req;
  const connections = await getConnections();
  let users = await getLoggedInUser();

  users = users.filter((user) => user._id.toString() !== userId);

  const connectedUsernames = connections.map(
    (connection) => connection.username
  );

  const suggestions = users.filter(
    (user) => !connectedUsernames.includes(user.username)
  );

  return suggestions;
};

module.exports = { getSuggestions };
