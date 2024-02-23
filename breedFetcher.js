const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    if (error) {
      callback(error, null);
      return;
    }
  
    const data = JSON.parse(body);
    if (data && data.length > 0 && data[0].description) {
      callback(null, data[0].description.trim());
    } else {
      callback(new Error('Breed not found'), null);
    }
  });
};

module.exports = { fetchBreedDescription };
