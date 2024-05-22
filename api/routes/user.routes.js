import express from "express";
import { test } from "../controllers/user.controller.js";
import { signout,getUsers,deleteUser,getUser } from "../controllers/user.controller.js";
import { verifyToken } from "../utils/verifyUser.js";
const router = express.Router();

router.get("/", test);
router.post("/signout", signout);
router.get('/getusers', verifyToken, getUsers);
router.delete('/delete/:userId', verifyToken, deleteUser);
router.get('/:userId', getUser);
export default router;
