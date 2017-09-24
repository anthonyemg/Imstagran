const routes = require('express').Router();
var request = require('request');

routes.get('/test', () => {
  request('https://www.instagram.com/highsnobiety/media/', function (error, response, body) {
    // // console.log('error:', error); // Print the error if one occurred
    // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    // // console.log('body:', body); // Print the HTML for the Google homepage.
    console.log(body)

    }
  );
});

module.exports = routes;
