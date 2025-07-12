import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/User.js";

export const registerUer = async (req, res) => {
  const { name, password, email } = req.body;
  try {
    const userExists = await User.findOne({ email });
    if (userExists)
      return res.status(400).json({ message: "User already exist" });
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({
      name,
      email,
      password: hashedPassword,
    });
    await user.save();
    res.status(200).json({ message: "Sign up Successful", user });
  } catch (error) {
    res.status(500).json({ message: "Server error",error });
  }
};


export const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const userExists = await User.findOne({ email });
    if (!userExists)
      return res.status(400).json({ message: "User does not exists" });
    const isMatch = await bcrypt.compare(password,userExists.password);
    if (!isMatch)
      return res.status(400).json({ message: "Incorrect password" });
    res.status(200).json({ message: "Login Successful" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
