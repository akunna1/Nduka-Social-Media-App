
import express from "express"; // Importing express framework to create routes
import { 
    createPostController,
    deletePostController,
    getPostController,
    getTimelinePostsController,
    likeAndDislikeController,
    updatePostController,
 } from "../controllers/post.controller.js";

const router = express.Router(); // Creating a new router instance

// Create post
router.post("/create-post", createPostController);

// Update post
router.put("/update-post/:id", updatePostController);

// Delete post
router.delete("/delete-post/:id", deletePostController);

// like and dislike
router.put("/like-post/:id", likeAndDislikeController);

// get post
router.get("/get-post/:id", getPostController);

// get timeline posts
router.get("/get-timeline-post/:id", getTimelinePostsController);

export default router;