const { getForums } = require("../../models/forums/forums.model");

const getAllForums = async (req, res) => {
  const forums = await getForums();
  res.status(200).json(forums);
};

module.exports = { getAllForums };
