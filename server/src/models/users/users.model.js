const user = require("./users.mongo");

const getLoggedInUser = async (id) => {
  let loggedUser = {};
  try {
    if (id) {
      loggedUser = user.find({ _id: id });
    } else {
      loggedUser = user.find();
    }
    return loggedUser;
  } catch (err) {
    console.log(err);
  }
};
module.exports = { getLoggedInUser };
