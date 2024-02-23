const request = require('request');
const arg = process.argv[2];

request(`https://api.thecatapi.com/v1/breeds/search?q=${arg}`, (error, response, body) => {
  if (error) {
    console.log(error);
    return;
  }
  const data = JSON.parse(body);
  if (data.length === 0) {
    console.log('Breed not found, please try a new search');
  } else if (data.length === 1) {
    console.log(`Description of ${data[0].name}:`, data[0].description);
  } else if (data.length > 1) {
    console.log(`Your search returned ${data.length} entries:`);
    data.forEach((breed, index) => {
      console.log(`${index + 1}. ${breed.name}: ${breed.description}`);
    });
  }
});
