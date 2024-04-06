const http = require('http');

function area() {
  var pi = 3.1415926536;
  var r = 5;
  var area = pi * (r**2);
  return area;
  
}

function circumference() {
  var pi = 3.1415926536;
  var r = 5;
  var circumference = 2*pi * r
  return circumference;
}

module.exports = {area, circumference};

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html'})
  res.end(`Area: ${area()}, Circumference: ${circumference()}`);
}).listen(3000);
