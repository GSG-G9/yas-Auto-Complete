const path = require('path');

const fs = require('fs');

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

module.exports = {
  handleMain,
  handleAsset,
};
