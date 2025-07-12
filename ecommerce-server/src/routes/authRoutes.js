import express from "express";
import { loginUser, logoutUser, registerUer } from "../controllers/authController.js";

const router = express.Router();

router.get("/signup", registerUer);
router.get("/login", loginUser);
router.get("/logout",logoutUser)

export default router;
