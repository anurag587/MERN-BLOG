import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/user.routes.js";
import authRoutes from "./routes/auth.routes.js";

dotenv.config();

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("Connection Successfull");
  })
  .catch((error) => {
    console.error("Error saving course:", error);
  });

const app = express();
app.use(express.json());

app.listen(5000, () => {
  console.log("Server is running on port 5000!!");
});

app.use("/api/", userRoutes);
app.use("/api/auth", authRoutes);
