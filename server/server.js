import express from "express"; // Importing the Express framework to create the server
import dotenv from "dotenv"; // Importing dotenv to load environment variables from a .env file
import helmet from "helmet"; // Importing helmet for securing HTTP headers
import morgan from "morgan"; // Importing morgan for HTTP request logging
import cors from "cors"; // Importing cors for Cross-Origin Resource Sharing
import { dbConnect } from "./dbConnect/dbConnect.js"; // Importing the dbConnect function from the dbConnect module
import routes from "./routes/routes.js" // Importing routes to handle different API endpoints

const app = express(); // Creating an Express application
dotenv.config(); // Loading environment variables from a .env file into process.env

app.use(helmet()); // Adding helmet middleware
app.use(morgan("common"));
app.use(cors());
app.use(express.json()); // Adding middleware to parse JSON bodies of incoming requests
app.use(routes);

app.listen(5000, () => {
    console.log("Server is running");
    
    dbConnect(); // Calling the dbConnect function to connect to the database
});
