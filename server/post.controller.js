import { createPost, getTimelinePosts } from "../services/post.service.js";

export const createPostController = async(req, res) => {
    try {
        const newPost = await createPost(req.body);
        res.status(200).json({
            newPost, 
            message: "Post has been created successfully",
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: "Post creation Failed",
            err,
        });
    }
};

export const updatePostController = async(req, res) => {
    try {
        const updatedPost = await updatePost(req.params, req.body);
        res.status(200).json({
            newPost, 
            message: "Post has been updated successfully",
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: "Post update failed",
            err,
        });
    }
};

export const deletePostController = async(req, res) => {
    try {
        const deletedPost = await deletePost(req.params, req.body);
        res.status(200).json({
            deletedPost, 
            message: "Post has been deleted successfully",
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: "Post deletion failed",
            err,
        });
    }
};

export const likeAndDislikeController = async(req, res) => {
    try {
        const post = await likeAndDislike(req.params, req.body);
        res.status(200).json({
            post, 
            message: "Post has been liked or disliked",
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: "Post liking or disliking failed",
            err,
        });
    }
};

export const getPostController = async(req, res) => {
    try {
        const post = await getPost(req.params);
        res.status(200).json({
            post, 
            message: "Post has been fetched successfully",
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: "Post fetch failed",
            err,
        });
    }
};

export const getTimelinePostsController = async(req, res) => {
    try {
        const timelinePosts = await getTimelinePosts(req.body);
        res.status(200).json({
            timelinePosts,
            message:"Timeline Post fetched successfully",
        })
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: "Post fetch failed",
            err,
        });
    }
};