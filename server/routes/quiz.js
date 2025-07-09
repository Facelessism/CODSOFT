const express = require("express");
const router = express.Router();
const Quiz = require("../models/Quiz");

router.post("/create", async (req, res) => {
  try {
    const newQuiz = new Quiz(req.body);
    await newQuiz.save();
    res.status(201).json({ message: "Quiz Created Successfully!!!" });
  } catch (err) {
    console.log("Error creating quiz:", err);
    res.status(500).json({ message: "Error Creating Your Quiz" });
  }
});

module.exports = router;