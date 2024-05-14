const forums = require("./forums.mongo");

const getForums = async () => {
  try {
    const allForums = await forums.aggregate([
      {
        $sample: { size: 3 },
      },
    ]);
    return allForums;
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getForums };
