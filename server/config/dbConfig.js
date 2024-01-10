import mongoose from "mongoose";
import dotenv from 'dotenv';

// loading data from .env

dotenv.config();

// MongoDB setup

/**
 * Get the MongoDB connection URL from the environment variables.
 */
const getDbURL = () => {
  console.log('Getting MongoDB connection URL');
  return process.env.MONGO_URL;
};


// Connect to MongoDB using the provided connection URL.
const connectToMongoDB = (dbURL) => {
  console.log('Connecting to MongoDB');
  return mongoose.connect(dbURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

// Connect to MongoDB
connectToMongoDB(getDbURL())
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch(error => {
    console.log('MongoDB connection error:', error);
  });

export default mongoose;