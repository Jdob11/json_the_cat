const {fetchBreedDescription} = require('./breedFetcher');
const breedName = process.argv[2];

fetchBreedDescription(breedName, (error, data) => {
  if (error) {
    console.log('Error fetch details:', error);
  } else {
    console.log(data);
  }
});