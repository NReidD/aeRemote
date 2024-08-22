const net = require('net');

// Create an HTTP server
const server = net.createServer((req) => {
  req.on('error', (err) => {
    if (err.code === 'ECONNRESET') {
      console.error('Connection reset by peer');
      // Handle the error appropriately
    } else {
      console.error('Request error:', err);
    }
  });

  req.on('error', (err) => {
    console.error('Response error:', err);
  });
  console.log("hi");

  // Simulate some processing
  setTimeout(() => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello, World!\n');
  }, 1000);
  
});

// Handle server errors
server.on('error', (err) => {
  console.error('Server error:', err);
});

// Start the server
server.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
