const { handleMain, handleAsset ,handleName } = require('./handler');

const router = (req, res) => {
  const endpoint = req.url;
  if (endpoint === '/') {
    handleMain(res);
  } else if (endpoint.includes('/public')) {
    handleAsset(res, endpoint);}
 
  else if (endpoint === '/name') {
    handleName(res);
  }
};

module.exports = router;
