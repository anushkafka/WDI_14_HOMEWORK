let req = require("request");

let api_key = process.env.WEATHER_API_KEY;

let url =
  `https://api.openweathermap.org/data/2.5/weather?q=${process.argv[2]}` +
  `&APPID=${api_key}`;

let options = {
  uri: url,
  method: "GET"
};

req(options, (error, response, body) => {
  console.log("error:", error); // Print the error if one occurred
  console.log("statusCode:", response && response.statusCode); // Print the response status code if a response was received
  console.log("body:", body); // Print the HTML for the Google homepage.
});
