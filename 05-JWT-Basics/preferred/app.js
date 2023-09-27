// app.js

const express = require('express'); // Import the Express library
const dotenv = require('dotenv'); // Import the dotenv library to read environment variables
const authRoutes = require('./routes/authRoutes'); // Import the authRoutes file

const app = express(); // Create an instance of the Express application

// Load environment variables from .env file
dotenv.config();

// Middleware
app.use(express.static('./public'))
app.use(express.json()); // Parse incoming requests with JSON payloads and make them available in req.body

// Routes
app.use('/api/v1', authRoutes); // Use the authRoutes for all routes starting with /api/v1

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ message: 'Internal server error' });
});

// Start the server
const PORT = process.env.PORT || 3000; // Set the port to the one specified in the .env file or 3000 if not specified

const start = async () => {
    try {
      app.listen(PORT, () =>
        console.log(`Server is listening on port ${PORT}...`)
      );
    } catch (error) {
      console.log(error);
    }
  };
  
  start();
