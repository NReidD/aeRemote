const net = require('net');

const PORT = 2998;
const HOST = '0.0.0.0';

const server = net.createServer((socket) => {
  console.log('OC client connected');

  socket.on('data', (data) => {
    const msg = data.toString().trim();
    console.log('Received:', msg);
    socket.write("Echo: " + msg);
  });

  socket.on('end', () => {
    console.log('Client disconnected');
  });

  socket.on('error', (err) => {
    console.error('Error:', err.message);
  });
});

server.listen(PORT, HOST, () => {
  console.log(`Server listening on ${HOST}:${PORT}`);
});
