// Code Function: defines controllers for user registration and login, handling requests by calling corresponding 
// functions from the authentication service and sending appropriate responses

// Importing the registerUser function from the auth service
import { registerUser } from "../services/auth.service.js";
import { deleteUser } from "../services/user.service.js";

// Register Controller
export const register = async (req, res) => {
    try {
        // Calling the registerUser function with the request body to register a new user
        const newUser = await registerUser(req.body);

        // Extracting sensitive information (like password) from the user data
        const { password, ...data } = newUser._doc;

        // Sending a success response with the registered user data
        res.status(200).json({
            data,
            message: "User has been registered successfully",
        });
    } catch (error) {
        // Sending an error response if registration fails
        res.status(500).json({
            error: error,
            message: "Error occurred registering user",
        });
        console.log(error); // Logging the error to the console
    }
};

// Login Controller
export const login = async (req, res) => {
    try {
        // Calling the loginUser function with the request body to log in a user
        const data = await deleteUser(req.params.id);

        // Sending a success response with the logged-in user data
        res.status(200).json({
            message: "User Logged in Successfully",
            data,
        });
    } catch (error) {
        // Sending an error response if login fails
        res.status(500).json({
            error: error,
            message: "Error Occurred Logging in the User",
        });
        console.log(error); // Logging the error to the console
    }
};
