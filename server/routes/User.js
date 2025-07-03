import express from "express";
import verifyToken from "../middleware/verifyToken.js";
import User from "../models/User.js";

const router = express.Router();

router.get("/me", verifyToken, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    if (!user) return res.status(404).json({ error: "User Not Found" });

    res.json(user);
  } catch (err) {
    res.status(500).json({ error: "Server Error 404" });
  }
});

export default router;
