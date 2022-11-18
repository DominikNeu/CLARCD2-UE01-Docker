const express = require('express');
const path = require('path');

// App
const app = express();
app.get('/', (req, res) => {
  //res.send('Hello World');
  res.sendFile(path.join(__dirname, '/index.html'));
});

app.get('/api', (req, res) => {
    res.send('Hello from the API!');
  });

app.listen(8080, "0.0.0.0", () => {
  console.log(`Running on http://0.0.0.0:8080`);
});