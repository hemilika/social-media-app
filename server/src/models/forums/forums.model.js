const forums = require("./forums.mongo");

const getForums = async () => {
  try {
    const allForums = await forums.find();
    return allForums;
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getForums };
