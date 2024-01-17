import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from 'body-parser';

import dbConfig from './config/dbConfig.js';  // necessary to import

import authRoute from "./routes/authRoutes.js";
import cookieParser from 'cookie-parser';
// Load environment variables from .env file
dotenv.config();

// Initialize the express app
const app = express();
app.use(bodyParser.urlencoded({extended: true}));
// Enable CORS
app.use(cors());
app.use(cookieParser());
// app.use((req, res, next) => {
//   res.header('Access-Control-Allow-Origin', 'http://localhost:5173');
//   res.header('Access-Control-Allow-Credentials', true);
//   res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
//   res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');

//   next();
// });






// Parse request bodies as JSON
app.use(express.json());
app.use("/auth",  authRoute);

// Get the port number from the environment variable, defaulting to 5000 if not set
const PORT = process.env.PORT || 5000;

// Start the server
app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});