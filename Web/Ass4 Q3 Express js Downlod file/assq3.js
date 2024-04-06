const express = require('express');
const path = require('path');

const app = express();
const port = 9000;

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'assq3.html'));
});

app.get('/download', (req, res) => {
  const fileName = req.query.file;
 
 // const fileContent = 'This is a dummy file content.';
  res.download("/home/fymsc17/WF program/ASS4/Q3/"+fileName);
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
