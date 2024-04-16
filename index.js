const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// POST endpoint
app.post('/api/payload', (req, res) => {
  // Assuming the client sends a JSON payload in the request body
  const clientPayload = req.body;

  // You can process the client payload here if needed

  // Create a generalized response object
  console.log(clientPayload);
  const response = {
    message: 'Received payload successfully',
    data: clientPayload  // Echo back the received payload
  };

  res.json(response);
});

// Start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
