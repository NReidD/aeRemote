const net = require('net');
const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());

// Simple REST test endpoint
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from the backend!' });
});

// Start REST server
const httpPort = 2999;
app.listen(httpPort, () => {
  console.log(`HTTP Server listening on port ${httpPort}`);
});

// TCP Server for OpenComputers
const tcpPort = 2998;
const tcpHost = '127.0.0.1';

const server = net.createServer((socket) => {
  console.log('OpenComputers client connected');

  socket.on('data', (data) => {
    const message = data.toString().trim();
    console.log('Received from OC:', message);

    // Echo the message back
    const response = `Echo: ${message}`;
    socket.write(response);
  });

  socket.on('end', () => {
    console.log('OC client disconnected');
  });

  socket.on('error', (err) => {
    console.error('Socket error:', err.message);
  });
});

server.listen(tcpPort, tcpHost, () => {
  console.log(`TCP Server listening on ${tcpHost}:${tcpPort}`);
});
