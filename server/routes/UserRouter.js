import express from "express";

import {
  registerUser,
  loginUser,
  getProfile,
  updateProfile
} from "../controllers/UserController.js";

import {
  verifyToken
} from "../middlewares/authMiddleware.js";

const UserRouter = express.Router();

// Register
UserRouter.post("/register", registerUser);

// Login
UserRouter.post("/login", loginUser);

// Get logged-in user's profile
UserRouter.get("/profile", verifyToken, getProfile);

// Update logged-in user's profile
UserRouter.put("/profile", verifyToken, updateProfile);

export default UserRouter;