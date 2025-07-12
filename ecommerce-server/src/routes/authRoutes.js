import express from "express";
import { loginUser, registerUer } from "../controllers/authController.js";

const router = express.Router();

router.get("/signup", registerUer);
router.get("/login", loginUser);

export default router;
