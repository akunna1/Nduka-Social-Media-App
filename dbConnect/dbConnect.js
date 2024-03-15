import mongoose from "mongoose"; // Importing the mongoose library for MongoDB interactions

// Defining a function named dbConnect that connects to the MongoDB database
export const dbConnect = async () => {
    try {
        // Connecting to the MongoDB database using the DB_URL environment variable
        await mongoose.connect(process.env.DB_URL);
        
        console.log("Database has been connected successfully");
    } catch (error) {
        console.error("Error connecting to the database:", error);
    }
};

