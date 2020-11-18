const { handleMain, handleAsset } = require('./handler');

const router = (req, res) => {
  const endpoint = req.url;
  if (endpoint === '/') {
    handleMain(res);
  } else if (endpoint.includes('/public')) {
    handleAsset(res, endpoint);
  }
};

module.exports = router;
