const url = "http://api.icndb.com/jokes/random";
const request = require("request");

const getNewJoke = callback => {
  request(url, (error, response, body) => {
    const jokeObject = JSON.parse(body);
    console.log("body:", jokeObject.value.joke);
    callback(jokeObject);
  });
};

module.exports = getNewJoke;
