import express from "express";
import { test } from "../controllers/user.controller.js";
import { signout } from "../controllers/user.controller.js";

const router = express.Router();

router.get("/", test);
router.post("/signout", signout);

export default router;
