const { getUserConnections } = require("../../models/users/users.model");
const { getLoggedInUser } = require("../users/users.model");

const getSuggestions = async (req, search) => {
  const { userId } = req;
  console.log(search);

  const connectionsData = await getUserConnections(userId);
  const connectedUsername = connectionsData[0].connections.map(
    (connection) => connection.username
  );

  let users = await getLoggedInUser();

  users = users.filter((user) => user._id.toString() !== userId);

  let suggestions = users.filter(
    (user) => !connectedUsername.includes(user.username)
  );

  if (search) {
    const regex = new RegExp(search, "i");
    suggestions = suggestions.filter((user) => regex.test(user.username));
  }

  return suggestions;
};

module.exports = { getSuggestions };
