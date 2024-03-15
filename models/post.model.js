import mongoose from "mongoose"; // Importing mongoose library for MongoDB interactions
import { Schema } from "mongoose"; // Importing Schema class from mongoose

// Defining a new mongoose schema for the Post model
const postSchema = new Schema({
    userId: {
        type: String,
        required: true,
    },
    desc: {
        type: String,
    },
    img: {
        type: String,
    },
    likes : {
        type: Array,
        defauly: [],
    },
    }, 
    {
    timestamps: true,
    }
);

// Exporting the Post model created from the postSchema
export default mongoose.model("Post", postSchema);
