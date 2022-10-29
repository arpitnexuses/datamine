import express from "express";
import {
  authUser,
  registerUser,
  updateUserProfile, getAllUsers
} from "../controllers/userController.js";
import { protect,protecto, isadmin } from "../middleware/authMiddleware.js";
const router = express.Router();

router.route("/").post(registerUser);
router.post("/login", authUser);
router.route("/dashboard").post(protect)
router.route("/profile").post(protect, updateUserProfile);
router.route("/protect").post(protecto, isadmin);


export default router;
