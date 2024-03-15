import mongoose from "mongoose"; // Importing mongoose library for MongoDB interactions
import { Schema } from "mongoose"; // Importing Schema class from mongoose

// Defining a new mongoose schema for the User model
const userSchema = new Schema({
    // Defining properties for the User model
    username: {
        type: String, // Field type is String
        required: true, // Field is required
        unique: true, // Field value must be unique
        minlength: 3, // Minimum length of the string
    }, 
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    profilePicture: {
        type: String,
        default: "", // Default value for the field
    },
    coverPicture : {
        type: String,
        default: "",
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
    desc: {
        type: String,
    },
    from: {
        type: String,
    },  
    relationship: {
        type: Number,
        enum: [1, 2, 3], 
    }, 
    followers: {
        type: Array,
        default: [],
    },
    followings: {
        type: Array,
        default: [],
    },
});

// Exporting the User model created from the userSchema
export default mongoose.model("User", userSchema);
