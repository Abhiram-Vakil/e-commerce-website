import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import authRoute from "./routes/authRoutes.js";
import { connectDB } from "./config/db.js";

dotenv.config();

const PORT = process.env.PORT;
const app = express();
connectDB();
app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoute);

app.get("/", (req, res) => {
  res.send("Helloworld");
});

app.listen(PORT, () => {
  console.log(
    `server is running at port ${PORT} url http://localhost:${PORT} `
  );
});