const { getConnections } = require("../connections/connections.model");
const { getLoggedInUser } = require("../users/users.model");

const getSuggestions = async (id) => {
  const connections = await getConnections();
  let users = await getLoggedInUser();

  users = users.filter((user) => user._id !== id);

  const connectedUsernames = connections.map(
    (connection) => connection.username
  );

  const suggestions = users.filter(
    (user) => !connectedUsernames.includes(user.username)
  );

  return suggestions;
};

module.exports = { getSuggestions };
