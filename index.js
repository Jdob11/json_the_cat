const {fetchBreedInformation} = require('./breedFetcher');
const breedName = process.argv[2];

fetchBreedInformation(breedName, (error, data) => {
  if (error) {
    console.log(error);
    return;
  }
  if (data.length === 0) {
    console.log('Breed not found, please try a new search');
  } else if (data.length === 1) {
    console.log(`Description of ${data[0].name}:`, data[0].description);
  } else {
    console.log(`\nMultiple breeds found for query "${breedName}":\n`);
    data.forEach((breed, index) => {
      console.log(`${index + 1}. ${breed.name}: ${breed.description}\n`);
    });
  }
});