const Users = require("./users.mongo");

const getUsers = async () => {
  try {
    const allUsers = Users.find();
    return allUsers;
  } catch (err) {
    console.log(err);
  }
};
module.exports = { getUsers };
