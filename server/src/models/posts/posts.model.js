const posts = require("./posts.mongo");

const getPosts = async () => {
  try {
    const allPosts = posts.find().exec();
    return allPosts;
  } catch (err) {
    console.log(err);
  }
};
module.exports = { getPosts };
