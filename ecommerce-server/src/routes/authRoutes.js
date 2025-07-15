import express from "express";
import {
  loginUser,
  logoutUser,
  registerUser,
} from "../controllers/authController.js";
import protect from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/signup", registerUser);
router.post("/login", loginUser);
router.get("/logout", logoutUser);
router.get("/me", protect, (req, res) => {
  res.status(200).json({ user: req.user });
});

export default router;
