const users = require("./users.mongo");

const getUsers = async () => {
  try {
    const allUsers = users.find();
    return allUsers;
  } catch (err) {
    console.log(err);
  }
};
module.exports = { getUsers };
