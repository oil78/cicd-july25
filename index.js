const http = require('http');
const PORT = process.env.PORT || 8080;
http.createServer((req, res) => {
  res.end('Hello from CI/CD in GCP!');
}).listen(PORT, () => console.log(`Server running on port ${PORT}`)); 