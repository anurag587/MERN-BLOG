import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/error.js";

export const signup = async (req, res, next) => {
  const { username, email, password } = req.body;
  if (
    !username ||
    !email ||
    !password ||
    username === " " ||
    email === " " ||
    password === " "
  ) {
    next(errorHandler(400, "All fields are required"));
  }

  const hashPassword = bcryptjs.hashSync(password, 10); //In the bcryptjs.hashSync(password, 10) function, the 10 represents the number of rounds the bcrypt algorithm will run to hash the password. Increasing the number of rounds increases the computational effort required to hash the password, making it more secure against brute-force attacks.

  const newUser = new User({
    username,
    email,
    password: hashPassword,
  });
  try {
    await newUser.save();
    res.json({ message: "Signup Successfull" });
  } catch (error) {
    next(error);
  }
};
