const users = require("./users.mongo");

const getUsers = async () => {
  console.log("-----------------", users);
  try {
    // const allUsers = users.find({}, { _id: 0, __v: 0 });
    const allUsers = users.find();
    return allUsers;
  } catch (err) {
    console.log(err);
  }
};
module.exports = { getUsers };
