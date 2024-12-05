// Import the Express module
const express = require('express');

// Create an instance of an Express application
const app = express();

// Define the port to run the server
const PORT = 3000;

// Create a route for the root URL
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});