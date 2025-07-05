import express from "express";
import Job from "../models/Job.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { title, company, location, type, description, deadline } = req.body;

    if (!title || !company || !location || !type || !description || !deadline) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const newJob = new Job({ title, company, location, type, description, deadline });
    await newJob.save();

    res.status(201).json({ message: "Job Posted Successfully!!!", job: newJob });
  } catch (err) {
    console.error("Error Creating New Job:", err.message);
    res.status(500).json({ error: "Server Error" });
  }
});

router.get("/", async (req, res) => {
  try {
    const jobs = await Job.find().sort({ createdAt: -1 });
    res.json(jobs);
  } catch (err) {
    res.status(500).json({ error: "Failed To Fetch Jobs" });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const jobId = req.params.id;
    const job = await Job.findById(jobId);

    if (!job) return res.status(404).json({ error: "Job Not Found!!!" });
    res.json(job);
  } catch (err) {
    console.error("Error Fetching Job:", err.message);
    res.status(500).json({ error: "Server Error 404" });
  }
});

export default router;
