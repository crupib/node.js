const http = require('http');

const server = http.createServer((req, res) => {
  res.end('Blow me World!\n');
});

server.listen(4000, () => {
  console.log('Server is running doosh bag...');
});
