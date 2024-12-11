   const express = require('express');
   const cors = require('cors');

   const app = express();
   app.use(cors());

   app.get('/api/hello', (req, res) => {
    console.log('====================================');
    console.log();
    console.log('====================================');
     res.json({ message: 'Hello from the backend!' });
   });

   const port = 2999;
   app.listen(port, () => {
     console.log(`Server listening on port ${port}`);
   });
   const net = require('net');
   const client = new net.Socket();
   const portCli = 2998; // Replace with the server's port
   const host = '127.0.0.1'; // Replace with the server's IP address or hostname
   client.connect(portCli, host, () => {
    client.write('This is a message from the client.');

    console.log('Connected to server');
    // Optionally send initial data after connection
    client.write('Hello from client!');
  });
  