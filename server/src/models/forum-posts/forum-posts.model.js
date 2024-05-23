const forumPosts = require("./forum-posts.mongo");

const getForumPosts = async (search) => {
  const searchQuery = search
    ? { forumPosted: { $regex: search, $options: "i" } }
    : {};
  try {
    const allPosts = await forumPosts
      .find(searchQuery)
      .sort({ datePosted: -1 })
      .exec();
    return allPosts;
  } catch (err) {
    console.log(err);
    throw new Error("Error fetching forum posts");
  }
};

module.exports = { getForumPosts };
