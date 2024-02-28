import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";

export const signup = async (req, res) => {
  const { username, email, password } = req.body;
  if (
    !username ||
    !email ||
    !password ||
    username === " " ||
    email === " " ||
    password === " "
  ) {
    return res.status(400).json({ message: " All fields are required" }); //Status 400 (Bad Request): This status code indicates that the server cannot process the request due to a client error, such as malformed syntax or invalid request parameters
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
    res.status(500); //Status 500 (Internal Server Error): This status code indicates that something went wrong on the server side while processing the request.
  }
};
