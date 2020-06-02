// src/server.js
const http = require('http');
const app = require('./app');
const httpServer = http.createServer(app).listen(80, () => {
  console.log('http server start, listen 80...');
  logger.info('http server start, listen 80...');
});
httpServer.on('error', onError);

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  switch (error.code) {
    case 'EACCES':
      console.error('port 80 requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error('port 80 is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

app.post('/login', function(req, res) {
    var userName = req.body.userName;
    var password = req.body.password;
    console.log('User name =' + userName + ', password is' + password)
    res.end('yes')
})

process.on('uncaughtException', (err) => {
  logger.error('uncaughtException: ' + err);
});