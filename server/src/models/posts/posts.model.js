const Posts = require("./posts.mongo");

const getPosts = async () => {
  console.log("Getting posts from database...");
  try {
    const allPosts = Posts.find();
    return allPosts;
  } catch (e) {
    console.log(e);
  }
};
module.exports = { getPosts };
