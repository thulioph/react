var PhotosApi, axios;

axios = require('axios');

PhotosApi = {
  get: function() {
    var photos_url;

    photos_url = 'http://jsonplaceholder.typicode.com/photos/';

    return axios.get(photos_url);
  }
};

module.exports = PhotosApi;