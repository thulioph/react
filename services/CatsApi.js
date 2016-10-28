var axios;

axios = require('axios');

var CatsApi = {
  get: function() {
    return axios.get('https://gist.githubusercontent.com/thulioph/b3e8a7d63e8395909e51e6e2714f9b5c/raw/4c2eb6d57e9bfcb474de7988cfa5e27e1a98bb84/cats.json');
  }
};

module.exports = CatsApi;