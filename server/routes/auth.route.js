// Code Function: creates routes for user registration and login using Express, linking them to the corresponding 
// controller functions from the auth controller

import express from "express"; // Importing express framework to create routes
import { register, login } from "../controllers/auth.controller.js"; // Importing register and login functions from the auth controller

const router = express.Router(); // Creating a new router instance

router.post("/register", register); // Register route
router.post("/login", login); // Login route

export default router; // Exporting the router
