const getNewJoke = require("./util/getNewJoke");

const index = (req, res) => {
  const handleJokeObject = jokeObject => {
    res.json(jokeObject);
  };

  getNewJoke(handleJokeObject);
};

module.exports = { index };
