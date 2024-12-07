const net = require('net');

// Create an HTTP server
const server = net.createServer((req) => {
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
    req.end();
  }, 1000);
  req.on('data', (chunk) => {
    console.log(chunk.toString());
    
    data += chunk
    
  });
  req.on('end', () => {
    // Convert the accumulated data (Buffer) into a string
    console.log('Received data:', data.toString());  // Assuming the data is UTF-8 encoded text

    // Send a response back to the client (you can choose what to send)
    req.write('Data received successfully: ' + data.toString());
    req.end(); // Close the connection
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
