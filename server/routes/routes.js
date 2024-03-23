// Code Function: sets up routes for user and authentication endpoints using Express, combining user and 
// authentication routers under the /api/v1 base URL

import express from "express"; // Importing express framework to create routes
import userRoutes from "./user.route.js";  // Creating a new router instance
import authRoutes from "./auth.route.js";  // Creating a new router instance
import postRoutes from "./post.route.js";  // Creating a new router instance

const router = express.Router();
const baseURL = "/api/v1";

router.use(`${baseURL}/users`, userRoutes);
router.use(`${baseURL}/auth`, authRoutes);
router.use(`${baseURL}/posts`, postRoutes);

export default router;
