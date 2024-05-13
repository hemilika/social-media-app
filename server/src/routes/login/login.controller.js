const User = require("../../models/users/users.mongo");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const secretKey = process.env.SECRET_KEY;

const registerController = async (req, res) => {
  try {
    const { email, username, password, fullName, dateJoined } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({
      fullName: fullName,
      dateJoined: dateJoined,
      profilePicture: "",
      username: username,
      email: email,
      password: hashedPassword,
      forums: [],
      jobField: "",
      experience: 0,
      education: "",
      degree: "",
      interests: [],
      connections: [],
    });
    await user.save();
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Registration failed" });
  }
};

const loginController = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(401).json({ error: "Authentication failed" });
    }
    const passwordMatch = await bcrypt.compare(password, user._doc.password);
    if (!passwordMatch) {
      return res.status(401).json({ error: "Authentication failed" });
    }
    const token = jwt.sign({ userId: user._id }, secretKey, {
      expiresIn: "24h",
    });
    res.status(200).json({ token });
  } catch (error) {
    res.status(500).json({ error });
  }
};
module.exports = { loginController, registerController };
