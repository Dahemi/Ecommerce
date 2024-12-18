import express from "express";
import {
  getUser,
  getUserFriends,
  addRemoveFriend,
} from "../Controllers/users.js";

import { verifyToken } from "../Middleware/auth.js";

const router = express.Router();

//READ id as the query string
router.get("/:id", verifyToken, getUser);
router.get("/:id/friends", verifyToken, getUserFriends);

//UPDATE
router.patch("/:id/:friendId", verifyToken, addRemoveFriend);

export default router;
