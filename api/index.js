import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/user.routes.js";

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

app.listen(3000, () => {
  console.log("Server is running on port 3000!!");
});

app.use("/api/", userRoutes);