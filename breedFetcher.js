const request = require('request');

const inputBreedName = process.argv[2];
const searchURL = `https://api.thecatapi.com/v1/breeds/search?q=${inputBreedName}`;

request(searchURL, (error, response, body) => {
  if (error) {
    console.log('error:');
  }
  const data = JSON.parse(body);
  if (data.length === 0) {
    console.log('Breed not found!');
  } else {
    console.log(data[0].description);
  }
});

