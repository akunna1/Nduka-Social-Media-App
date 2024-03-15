// Code Function: defines a route for the /api/v1/users endpoint

import express from "express"; // Importing express framework to create routes
import { 
    deleteUserController, 
    updateUserController,
    getUserController,
    followUserController,
    unfollowUserController,
} from "../controllers/user.controller.js";

const router = express.Router(); // Creating a new router instance

// Update USER
router.put("/:id", updateUserController);

// Delete USER
router.delete("/:id", deleteUserController);

// Get USER
router.get("/:id", getUserController);

// Following a user
router.put("/follow/:id", followUserController);

// Unfollowing a user
router.put("/unfollow/:id", unfollowUserController);

export default router; // Exporting the router
