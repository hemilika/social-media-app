const mongoose = require("mongoose");

const MONGO_URL =
  "mongodb+srv://social-media-hemi:Mediasociale11.@cluster0.5vaelp5.mongodb.net/?retryWrites=true&w=majority";

mongoose.connection.once("open", () => {
  console.log("MongoDb connection ready!");
});

mongoose.connection.on("error", (err) => {
  console.error(err);
});

const mongoConnect = async () => {
  mongoose.connect(MONGO_URL);
  console.log("MongoDB connection success");
};

const mongoDisconnect = async () => {
  mongoose.disconnect();
};

module.exports = {
  mongoConnect,
  mongoDisconnect,
};
