const jwt = require("jsonwebtoken");
require("dotenv").config();
const secretKey = process.env.SECRET_KEY;

const authenticateToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (req.originalUrl == "/login" || req.originalUrl == "/register") {
    next();
  } else {
    if (!token) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    jwt.verify(token, secretKey, (err, user) => {
      if (err) {
        return res.status(403).json({ message: "Forbidden" });
      }
      req.user = user;
      next();
    });
  }
};

module.exports = { authenticateToken };
