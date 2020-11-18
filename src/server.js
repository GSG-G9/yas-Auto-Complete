const http = require('http');
// const env = require('env2')('./path-to-your/.env');
const env = require('env2')('./src/server.env');

const hostname = process.env.HOSTNAME || 'localhost';
const port = process.env.PORT || 4000;

const server = http.createServer();

server.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`server will run at http:// ${hostname} : ${port}`);
});
