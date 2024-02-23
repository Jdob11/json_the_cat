const request = require('request');

const fetchBreedInformation = function(breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    if (error) {
      callback(error, null);
      return;
    }
    const data = JSON.parse(body);
    callback(null, data);
  });
};

module.exports = { fetchBreedInformation };
