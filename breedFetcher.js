const rq = require("request");

const fetchBreedDescription = function(breed, callback) {
  rq("https://api.thecatapi.com/v1/breeds/search?q=" + breed, (error, response, body) => {
    if (error) {
      callback(`ERROR", ${error}`, body);
    }

    const data = JSON.parse(body);
    const breed = data[0];

    if (breed) {
      callback(error, `description: ${breed.description}`);
    } else {
      callback("REQUEST FAILED: breed not found", body);
    }
  });
};

module.exports = { fetchBreedDescription };