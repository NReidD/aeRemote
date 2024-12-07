const http = require('http');

// Create an HTTP server
const server = http.createServer((req, res) => {
  let data = ''
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
    req.write("/init");
    req.end('Hello, World!\n');
  }, 1000);
  req.on('data', (chunk) => {
    data += chunk
    
  });
  req.on('end', () => {
    // Convert the accumulated data (Buffer) into a string
    console.log('Received data:', data.toString());  // Assuming the data is UTF-8 encoded text

    // Handle the response
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Data received successfully: ' + data.toString());
  });
});

// Handle server errors
server.on('error', (err) => {
  console.error('Server error:', err);
});

// Start the server
server.listen(3000, () => {
  console.log('Server is listening on port 9000');
});
