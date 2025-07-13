import bcrypt from "bcrypt";
import User from "../models/User.js";
import generateToken from "../utils/generateToken.js";

export const registerUser = async (req, res) => {
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
    const token = generateToken(user._id);

    res.cookie("token", token, {
      httpOnly: true,
      secure: true, // only over HTTPS
      sameSite: "Strict", // protects from CSRF
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    });

    res.status(200).json({ message: "Sign up Successful", user });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
    console.error(error);
  }
};

export const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const userExists = await User.findOne({ email });
    if (!userExists)
      return res.status(400).json({ message: "User does not exists" });
    const isMatch = await bcrypt.compare(password, userExists.password);
    if (!isMatch)
      return res.status(400).json({ message: "Incorrect password" });
    const token = generateToken(userExists._id);
    res.cookie("token", token, {
      httpOnly: true,
      secure: true, // only over HTTPS
      sameSite: "Strict", // protects from CSRF
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    });
    res.status(200).json({ message: "Login Successful" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

export const logoutUser = (req, res) => {
  res.clearCookie("token", {
    httpOnly: true,
    secure: true,
    sameSite: "Strict",
  });

  res.status(200).json({ message: "Logged out successfully" });
};