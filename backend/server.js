const express = require('express');
const cors = require('cors');
const net = require('net');

const app = express();
app.use(cors());

// HTTP server on port 2999
const HTTP_PORT = 2999;

app.get('/api/hello', (req, res) => {
  console.log('Received HTTP GET /api/hello');
  res.json({ message: 'Hello from the backend!' });
});

app.listen(HTTP_PORT, () => {
  console.log(`Express server listening on port ${HTTP_PORT}`);
});

// TCP server on port 2998
const TCP_PORT = 2998;
const TCP_HOST = '127.0.0.1';

const tcpServer = net.createServer((socket) => {
  console.log('TCP client connected:', socket.remoteAddress + ':' + socket.remotePort);

  socket.on('data', (data) => {
    const msg = data.toString().trim();
    console.log('Received TCP data:', msg);

    // Send acknowledgment back to client
    socket.write(`Server got your message: "${msg}"\n`);
  });

  socket.on('end', () => {
    console.log('TCP client disconnected');
  });

  socket.on('error', (err) => {
    console.error('TCP socket error:', err.message);
  });
});

tcpServer.listen(TCP_PORT, TCP_HOST, () => {
  console.log(`TCP server listening on ${TCP_HOST}:${TCP_PORT}`);
});

// TCP client function to send a message and await response
function sendMessage(message) {
  return new Promise((resolve, reject) => {
    const client = net.createConnection({ host: TCP_HOST, port: TCP_PORT }, () => {
      console.log('TCP client connected, sending message:', message);
      client.write(message);
    });

    client.on('data', (data) => {
      const response = data.toString().trim();
      console.log('TCP client received response:', response);
      resolve(response);
      client.end();
    });

    client.on('error', (err) => {
      console.error('TCP client error:', err.message);
      reject(err);
    });
  });
}

// Example usage: send a message to the TCP server
sendMessage('Hello, server!')
  .then(response => {
    console.log('Final response:', response);
  })
  .catch(err => {
    console.error('Error during TCP communication:', err);
  });
