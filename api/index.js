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
app.use(express.json()); //app.use(express.json()) is middleware that parses incoming requests with JSON payloads

app.listen(5000, () => {
  console.log("Server is running on port 5000!!");
});

app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);

// app.post("/api/auth", (res, req) => {
//   res.send(req.body);
// });

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});
