const { getUsers } = require("../../models/users/users.model");

const getAllUsers = async (req, res) => {
  const data = await getUsers();
  console.log("USERSSSSSSSSS", data);
  return res.status(200).json(data);
};

module.exports = { getAllUsers };
