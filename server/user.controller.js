import { deleteUser, updateUser, getUser, followUser, unfollowUser } 
from "../services/user.service.js"; // Importing CRUD functions from the user service

// Controller function to update user account
export const updateUserController = async (req, res) =>{
    // Checking if the user is updating their own account or is an admin
    if (req.body.userId === req.params.id || req.body.isAdmin) {
        try {
            // Attempting to update the user account
            const user = await updateUser(req.params.id, req.body);
            // Sending success response with updated user data
            res.status(200).json({
                user,
                message: "Account has been updated successfully",
            });
        } catch (err) {
            // Logging and sending error response if update fails
            console.log(err);
            res.status(500).json(err);
        }
    } else {
        // Sending error response if user is not authorized to update the account
        res.status(403).json("You can only update your own account");
    }
};

// Controller function to delete user account
export const deleteUserController = async (req, res) =>{
    // Checkinf if the user is deleting their own account or is an admin
    if (req.body.userId === req.params.id || req.body.isAdmin) {
        try {
            // Attempting to delete the user account
            await deleteUser(req.params.id);
            // Sending success response
            res.status(200).json({
                message: "Account has been deleted successfully",
            });
        } catch (err) {
            // Logging and sending error response if deletion fails
            console.log(err);
            res.status(500).json(err);
        }
    } else {
        // Sending error response if user is not authorized to delete the account
        res.status(403).json("You can only delete your own account");
    }
};

// Controller function to get user account
export const getUserController = async (req, res) =>{
    try {
        // Retrieving user account
        const user = await getUser(req.params.id);
        // Excluding password from user data
        const { password, ...data } = user._doc;
        // Sending success response with user data
        res.status(200).json({
            data, 
            message: "Account has been fetched successfully",
        });
    } catch (err) {
        // Logging and sending error response if retrieval fails
        console.log(err);
        res.status(500).json(err);
    }
};


export const followUserController = async (req, res) =>{
    try {
        const data = await followUser(req.body, req.params);
        res.status(200).json({
            data, 
            message: "Account has been fetched successfully",
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
};

export const unfollowUserController = async (req, res) =>{
    try {
        const data = await unfollowUser(req.body, req.params);
        res.status(200).json({
            data, 
            message: "Account has been fetched successfully",
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
};
