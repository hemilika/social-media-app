const { getConnections } = require("../connections/connections.model");
const { getLoggedInUser } = require("../users/users.model");

const getSuggestions = async () => {
  const connections = await getConnections();
  const users = await getLoggedInUser();

  const connectedUsernames = connections.map(
    (connection) => connection.username
  );

  const suggestions = users.filter(
    (user) => !connectedUsernames.includes(user.username)
  );

  return suggestions;
};

module.exports = { getSuggestions };
