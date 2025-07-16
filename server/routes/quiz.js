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

router.get("/all", async (req, res) => {
  try {
    const quizzes = await Quiz.find({});
    if (!quizzes || quizzes.length === 0) {
      return res.status(404).json({ message: "No quizzes found" });
    }
    res.json(quizzes);
  } catch (err) {
    console.error("Error fetching all quizzes:", err);
    res.status(500).json({ message: "Server error" });
  }
});
router.get("/:id", async (req, res) => {
  try {
    const quiz = await Quiz.findById(req.params.id);
    res.json(quiz);
  } catch (err) {
    console.log("Fetch quiz error:", err);
    res.status(404).json({ message: "Quiz Not Found" });
  }
});

module.exports = router;