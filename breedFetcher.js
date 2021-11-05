const args = process.argv.slice(2);
const rq = require("request");

const breedDescription = (breed) => {
  rq("https://api.thecatapi.com/v1/breeds/search?q=" + breed, (error, response, body) => {
    if (error) {
      console.log("ERROR: ", error);
    }

    const data = JSON.parse(body);
    const breed = data[0];
    if (breed) {
      console.log('description:', breed.description); 
    } else {
      console.log("REQUEST FAILED: breed not found");
    }
  });
};
//TOD0: add mocha tests
breedDescription(args[0]);

