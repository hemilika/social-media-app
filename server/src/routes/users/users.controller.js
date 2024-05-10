const { getLoggedInUser } = require("../../models/users/users.model");

const getUser = async (req, res) => {
  const data = await getLoggedInUser(req.userId);
  return res.status(200).json(data);
};

module.exports = { getUser };
