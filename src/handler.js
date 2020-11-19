const path = require('path');

const fs = require('fs');
const queryString = require('querystring');

const handleMain = (res) => {
  const filepath = path.join(__dirname, '..', 'public', 'index.html');
  fs.readFile(filepath, 'utf8', (error, file) => {
    if (error) {
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('Invalid server , there is an error ');
    } else {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(file);
    }
  });
};

const handleAsset = (res, endpoint) => {
  const mimetype = {
    css: 'text/css',
    html: 'text/html',
    js: 'text/javascript',
    jpg: 'image/jpeg',
    ico: 'image/x-icon',
    png: 'image/png',

  };
  const extension = endpoint.split('.')[1];
  const filepath = path.join(__dirname, '..', endpoint);
  fs.readFile(filepath, 'utf8', (error, file) => {
    if (error) {
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('Invalid server , there is an error ');
    } else {
      res.writeHead(200, { 'Content-Type': mimetype[extension] });
      res.end(file);
    }
  });
};
// const handleSearch = (req, res) => {
//   let allData = '';
//   req.on('data', (chunkOFData) => {
//     allData += chunkOFData ;
//   });
//   req.on('end', () => {
//     const convertedData = queryString.parse(allData);
//   });
// };

const handleName = (res) => {
  const filePath = path.join(__dirname, 'name.json');
  fs.readFile(filePath, 'utf8', (error, file) => {
    if (error) {
      res.writeHead(500, { 'Content-Type': 'text/html' });
      res.end('<h2> server Error  <h2>');
    } else {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(file);
    }
  });
};
module.exports = {
  handleMain,
  handleAsset,
  handleName,
};
