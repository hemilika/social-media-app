const { getLoggedInUser } = require("../../models/users/users.model");
const User = require("../../models/users/users.mongo");

const getUser = async (req, res) => {
  const data = await getLoggedInUser(req.userId);
  return res.status(200).json(data);
};

const updateUser = async (req, res) => {
  const updatedData = req.body;
  try {
    const result = await User.findByIdAndUpdate(req.userId, updatedData, {
      new: true,
    });
    return res.status(200).json(result);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Failed to update user" });
  }
};

module.exports = { getUser, updateUser };
