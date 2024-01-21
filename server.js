// Import the Express module
const express = require('express');

// Create an Express application
const app = express();

// Define a route for the root path
app.get('/', (req, res) => {
  res.send('Hello, this is a simple Node.js app!');
});

// Set the application to listen on port 3000
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
