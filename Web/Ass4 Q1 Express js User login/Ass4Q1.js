const express = require('express');
const app = express();
const bodyParser = require('body-parser'); // Middleware

app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.get('/login', (req, res) => {
  res.sendFile(__dirname + '/login.html');
});


const port = 3000; // Port we will listen on

app.listen(port, () => console.log(`This app is listening on port ${port}`));

