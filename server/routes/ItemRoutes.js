import express from "express";

import {
  createItem,
  deleteItem,
  getItemById,
  getItems,
  updateItem
} from "../controllers/ItemController.js";

import upload from "../middlewares/upload.js";

import {
  verifyToken,
  requireAdmin
} from "../middlewares/authMiddleware.js";

const itemRouter = express.Router();

// ADMIN ONLY - Add item
itemRouter.post(
  "/",
  verifyToken,
  requireAdmin,
  upload.single("itemImage"),
  createItem
);

// PUBLIC - View items
itemRouter.get("/", getItems);

// PUBLIC - View one item
itemRouter.get("/:id", getItemById);

// ADMIN ONLY - Update item
itemRouter.put(
  "/:id",
  verifyToken,
  requireAdmin,
  upload.single("itemImage"),
  updateItem
);

// ADMIN ONLY - Delete item
itemRouter.delete(
  "/:id",
  verifyToken,
  requireAdmin,
  deleteItem
);

export default itemRouter;