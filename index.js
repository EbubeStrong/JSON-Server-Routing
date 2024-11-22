// Using of express.js to return JSON Responses and Status Codes

// Importing of express.js
import express from "express";

// Import of dotenv to be used because of the .env file
import dotenv from 'dotenv'
const app = express();

dotenv.config()
const PORT = process.env.PORT;

// Route for "/success"
app.get("/success", (req, res) => {
  res.status(200).json({ message: "This page is Successful" });
});

// Route for "/error"
app.get("/error", (req, res) => {
  res.status(500).json({ message: "Something went wrong, try another route." });
});

// Falling back to a not found route for unmatched paths
app.use((req, res) => {
  res.status(404).json({ message: "Not Found" });
});

// Starting of the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});