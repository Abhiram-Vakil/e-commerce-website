import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import authRoute from "./routes/authRoutes.js";
import cookieParser from "cookie-parser";
import { connectDB } from "./config/db.js";
import protect from "./middleware/authMiddleware.js";

dotenv.config();

const PORT = process.env.PORT;
const app = express();
app.use(cookieParser());
connectDB();

app.use(express.json());
app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use("/api/auth", authRoute);

app.get("/", protect, (req, res) => {
  res.json({ message: "You are authorized", user: req.user });
});

app.listen(PORT, () => {
  console.log(
    `server is running at port ${PORT} url http://localhost:${PORT} `
  );
});
