const posts = require("./posts.mongo");

const getPosts = async (searchTerm = "") => {
  try {
    const filter = searchTerm
      ? { description: { $regex: searchTerm, $options: "i" } }
      : {};

    const allPosts = await posts.find(filter).sort({ datePosted: -1 }).exec();
    return allPosts;
  } catch (err) {
    console.log(err);
  }
};

module.exports = { getPosts };
