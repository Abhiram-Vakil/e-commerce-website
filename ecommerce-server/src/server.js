import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import protect from "./middleware/authMiddleware.js";
import productRoutes from "./routes/productRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import { connectDB } from "./config/db.js";

dotenv.config();

const PORT = process.env.PORT;
const app = express();
app.use(cookieParser());
connectDB();

app.use(express.json());
app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use("/api/auth", authRoutes);
app.use("/api", protect, productRoutes);

app.get("/", protect, (req, res) => {
  res.json({ message: "You are authorized", user: req.user });
});

app.listen(PORT, () => {
  console.log(
    `server is running at port ${PORT} url http://localhost:${PORT} `
  );
});
