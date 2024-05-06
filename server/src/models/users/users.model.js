const users = require("./users.mongo");
const axios = require("axios");

const getUsers = async () => {
  console.log("Getting users from database...");
  return await users.findById();
};
module.exports = { users };
