const http = require("http");
const app = require("./app");

require("dotenv").config();

const PORT = 5000;

const { mongoConnect } = require("./services/mongo");

const server = http.createServer(app);

async function startServer() {
  await mongoConnect();

  server.listen(PORT, () => {
    console.log("Listening on port " + PORT);
  });
}

startServer();
