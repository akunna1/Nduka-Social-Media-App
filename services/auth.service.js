// Code Function: defines functions to register a new user with hashed password and to authenticate a user's login 
// credentials using bcrypt for password hashing

import UserModel from "../models/user.model.js"; // Importing the UserModel from the user model
import bcrypt from "bcrypt"; // Importing bcrypt for password hashing

// Function to register a new user
export const registerUser = async (body) => {
    // Hashing the password using bcrypt
    const hashedPassword = bcrypt.hashSync(body.password, 10);

    // Creating a new user instance with hashed password
    const newUser = new UserModel({
        username: body.username,
        email: body.email,
        password: hashedPassword,
    });

    // Saving the new user to the database
    await newUser.save();

    // Returning the newly registered user
    return newUser;
};

// Function to log in a user
export const loginUser = async (body) => {
    // Finding the user by their email in the database
    const user = await UserModel.findOne({ email: body.email });

    // Returning an error response if user not found
    !user && res.status(404).json('User not found');

    // Checking if the entered password matches the hashed password in the database
    const passwordCheck = await bcrypt.compare(body.password, user.password);

    // Returning an error response if the password is incorrect
    !passwordCheck && res.status(400).json("Invalid password or username");

    // Returning the logged-in user if authentication succeeds
    return user;
};
