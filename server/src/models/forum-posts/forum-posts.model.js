const forumPosts = require("./forum-posts.mongo");

const getForumPosts = async (forumName) => {
  const forumNameQuery = forumName ? { forumPosted: forumName } : {};
  try {
    const allPosts = await forumPosts
      .find(forumNameQuery)
      .sort({ datePosted: -1 })
      .exec();
    return allPosts;
  } catch (err) {
    console.log(err);
    throw new Error("Error fetching forum posts");
  }
};

module.exports = { getForumPosts };
