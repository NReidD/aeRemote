const express = require('express');
const cors = require('cors');
const net = require('net');
const app = express();
app.use(cors());

app.get('/api/hello', (req, res) => {
  console.log('====================================');
  console.log();
  console.log('====================================');
  res.json({ message: 'Hello from the backend!' });
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

// Set the port and host for the TCP server
const PORT = 2998;
const HOST = '127.0.0.1';  // You can change this to your server's IP if running on a network
let connected = false;

// Create the server
const server = net.createServer((socket) => {
  console.log('Client connected');
  connected = true;

  // Handle client disconnection
  socket.on('end', () => {
    console.log('Client disconnected');
  });

  // Handle error (optional)
  socket.on('error', (err) => {
    console.error('Connection error: ' + err.message);
  });
});

// Start the server and listen on the specified port
server.listen(PORT, HOST, () => {
  console.log(`Server listening on ${HOST}:${PORT}`);
});

// Function to send a message and return the response from the server
function sendMessage(message) {
  return new Promise((resolve, reject) => {
    const client = net.createConnection({ host: HOST, port: PORT }, () => {
      // Send the message to the server
      console.log('Sending message: ' + message);
      client.write(message);
    });

    // Handle incoming data (response from server)
    client.on('data', (data) => {
      console.log('Server response: ' + data.toString());
      resolve(data.toString());  // Resolve the promise with the response data
      client.end();  // Close the connection after receiving the response
    });

    // Handle error (optional)
    client.on('error', (err) => {
      console.error('Error: ' + err.message);
      reject(err);  // Reject the promise in case of error
    });
  });
}

// Test the sendMessage function by calling it with a message
sendMessage('Hello, server!')
  .then(response => {
    console.log('Response from server: ', response);
  })
  .catch(err => {
    console.error('Error in communication: ', err);
  });
