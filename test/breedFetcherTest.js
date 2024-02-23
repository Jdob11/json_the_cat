const { fetchBreedDescription } = require('../breedFetcher');
const { assert } = require('chai');

describe('fetchBreedDescription', () => {
  
  it('returns a string description for a valid breed, via callback', (done) => {
    fetchBreedDescription('Siberian', (error, data) => {
      // we expect no error for this scenario
      assert.equal(error, null);

      const expectedData = 'The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors.';

      // compare returned description
      assert.equal(expectedData, data);

      done();
    });
  });

  it('returns an error for an invalid breed, and null for the description via callback', (done) => {
    fetchBreedDescription('Banana', (error, data) => {

      const expectedError = 'Error: Breed not found';
      
      assert.equal(error, expectedError);

      assert.equal(null, data);

      done();
    });
  });

});