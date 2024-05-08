const { getUsers } = require("../../models/users/users.model");

const getAllUsers = async (req, res) => {
  const data = await getUsers();
  return res.status(200).json(data);
};

module.exports = { getAllUsers };
