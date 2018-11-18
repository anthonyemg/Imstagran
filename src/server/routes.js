const routes = require('express').Router();
var request = require('request');
require('dotenv').config();
const { ACCESS_TOKEN } = process.env;

routes.post('/retrieve/photos', function(req, res) {
  request.get(`https://api.instagram.com/v1/users/self/media/recent/?access_token=${ACCESS_TOKEN}`,
  
  function (e, r, data) {
      res.send(data)
    })
});

module.exports = routes;
