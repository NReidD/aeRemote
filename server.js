const express = require('express');
const cors = require('cors');
const net = require('net');

const app = express();
app.use(cors());

const HTTP_PORT = 2999;
const TCP_PORT = 2998;
const HOST = '0.0.0.0'; // Listen on all interfaces

// === Express HTTP server ===
app.get('/api/hello', (req, res) => {
  console.log('Received /api/hello request');
  res.json({ message: 'Hello from the backend!' });
});

app.listen(HTTP_PORT, HOST, () => {
  console.log(`HTTP server listening on http://${HOST}:${HTTP_PORT}`);
});

// === TCP server ===
const tcpServer = net.createServer((socket) => {
  console.log('TCP client connected');

  socket.on('data', (data) => {
    console.log('Received TCP data:', data.toString());
    // You can respond back via socket.write if you want
    socket.write('Message received\n');
  });

  socket.on('end', () => {
    console.log('TCP client disconnected');
  });

  socket.on('error', (err) => {
    console.error('TCP socket error:', err.message);
  });
});

tcpServer.listen(TCP_PORT, HOST, () => {
  console.log(`TCP server listening on ${HOST}:${TCP_PORT}`);
});
