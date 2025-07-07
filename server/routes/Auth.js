const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

router.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const hashed = await bcrypt.hash(password, 10);
    const user = new User({ name, email, password: hashed });
    await user.save();
    res.status(201).json({ message: "User created" });
  } catch (err) {
    console.log("Register error:", err);
    res.status(500).json({ message: "Error registering user" });
  }
});

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const existing = await User.findOne({ email });
    if (!existing) return res.status(400).json({ message: "User Not Found!!!" });

    const match = await bcrypt.compare(password, existing.password);
    if (!match) return res.status(401).json({ message: "Wrong Password!!!" });

    const token = jwt.sign({ id: existing._id }, "secret");
    res.json({ token, name: existing.name });
  } catch (err) {
    console.log("Login Error:", err);
    res.status(500).json({ message: "Error Logging You In!!!" });
  }
});

module.exports = router;
