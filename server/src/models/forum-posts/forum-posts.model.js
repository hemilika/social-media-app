const forumPosts = require("./forum-posts.mongo");

const getForumPosts = async () => {
  try {
    const allPosts = forumPosts.find().sort({ datePosted: -1 }).exec();
    return allPosts;
  } catch (err) {
    console.log(err);
  }
};
module.exports = { getForumPosts };
