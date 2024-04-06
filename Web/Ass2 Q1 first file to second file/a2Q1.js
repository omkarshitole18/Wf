const http = require('http');
const fs = require('fs');
const url = require('url');
const path = require('path');

const server = http.createServer((req, res) => {
  const reqUrl = url.parse(req.url, true);

  if (reqUrl.pathname === '/') {
    // Serve the HTML form page
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(`
      <html>
        <head>
          <title>File Append</title>
        </head>
        <body>
          <h1>File Append</h1>
          <form action="/append" method="POST">
            <label for="file1">File 1:</label>
            <input type="text" name="file1" required><br>
            <label for="file2">File 2:</label>
            <input type="text" name="file2" required><br>
            <button type="submit">Append</button>
          </form>
        </body>
      </html>
    `);
  } else if (reqUrl.pathname === '/append' && req.method === 'POST') {
    // Handle the form submission
    let data = '';

    req.on('data', (chunk) => {
      data += chunk;
    });

    req.on('end', () => {
      const formData = new URLSearchParams(data);
      const file1 = formData.get('file1');
      const file2 = formData.get('file2');

      // Read content from file1 and append it to file2
      const content = fs.readFileSync(file1, 'utf8');
      fs.appendFileSync(file2, content, 'utf8');

      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end(`Content from ${file1} appended to ${file2}`);
    });
  } else {
    // Handle 404 Not Found
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

const PORT = 8080;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});










