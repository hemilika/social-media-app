const { users } = require("../../models/users/users.model");

const getAllUsers = (req, res) => {
  console.log("USERSSSSSSSSS", users);
  return res.status(200).json(users);
};

module.exports = { getAllUsers };
