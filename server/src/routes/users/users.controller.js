const { users } = require("../../models/users/users.model");

const getAllUsers = (req, res) => {
  return res.status(200).json(users);
};

module.exports = { getAllUsers };
