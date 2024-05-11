const { getForums } = require("../../models/forums/forums.model");
const Forums = require("../../models/forums/forums.mongo");

const getAllForums = async (req, res) => {
  const forums = await getForums();
  res.status(200).json(forums);
};

const createForum = async (req, res) => {
  try {
    const { forumName, forumDescription } = req.body;
    const forum = new Forums({
      forumName: forumName,
      forumDescription: forumDescription,
    });
    await forum.save();
    return res.status(200).json({ message: "Forum created successfully" });
  } catch (err) {
    console.log(err);
    return res.status(404).json(err);
  }
};
module.exports = { getAllForums, createForum };
