const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());


app.get('/api/hello', (req, res) => {
    console.log('====================================');
    console.log("HEEEE");
    console.log('====================================');
  res.json({ message: 'Hello from th!' });

});

const port = 2999;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
