const express = require('express');
const axios = require('axios');

const app = express();
const port = 3000;

// Middleware to parse JSON request bodies
app.use(express.json());

// /disable endpoint
app.post('/disable', async (req, res) => {
  try {
    // Call another API, for example, a mock URL
    const apiUrl = 'https://jsonplaceholder.typicode.com/posts'; // Replace with the actual API you want to call
    const response = await axios.post(apiUrl, {
      title: 'foo',
      body: 'bar',
      userId: 1
    });

    // Send back a success response after calling the external API
    res.status(200).json({
      message: 'Request to external API was successful',
      externalApiResponse: response.data
    });
  } catch (error) {
    // Handle errors if API call fails
    console.error('Error calling external API:', error);
    res.status(500).json({
      message: 'Failed to call external API',
      error: error.message
    });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
