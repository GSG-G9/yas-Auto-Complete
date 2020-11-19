// eslint-disable-next-line object-curly-newline
const { handleMain, handleAsset, handleSearch, handleName } = require('./handler');

const router = (req, res) => {
  const endpoint = req.url;
  if (endpoint === '/') {
    handleMain(res);
  } else if (endpoint.includes('/public')) {
    handleAsset(res, endpoint);
  } else if (endpoint === '/search') {
    handleSearch(req, res);
  } else if (endpoint === '/name') {
    handleName(res);
  }
};

module.exports = router;
