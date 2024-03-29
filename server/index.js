import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from 'body-parser';
import * as fs from "fs";
import dbConfig from './config/dbConfig.js';  // necessary to import

import authRoute from "./routes/authRoutes.js";
import balanceRoute from "./routes/balanceRoute.js";
import ticketsRoute from "./routes/ticketsRoute.js";
import cookieParser from 'cookie-parser';
// Load environment variables from .env file
dotenv.config();

// Initialize the express app
const app = express();
app.use(bodyParser.urlencoded({extended: true}));
// Enable CORS
app.use(cors());
app.use(cookieParser());


// Parse request bodies as JSON
app.use(express.json());
app.use("/auth", authRoute);
app.use("/balance", balanceRoute);
app.use("/tickets", ticketsRoute );

// Get the port number from the environment variable, defaulting to 5000 if not set
const PORT = process.env.PORT || 5000;


// Start the server
app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
});