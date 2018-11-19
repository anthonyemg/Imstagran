const routes = require('express').Router();
var request = require('request');
require('dotenv').config();
const { ACCESS_TOKEN } = process.env;

routes.get('/media', function(req, res) {
  request.get(`https://api.instagram.com/v1/users/self/media/recent/?access_token=${ACCESS_TOKEN}`,
  
  function (e, r, data) {
      res.send(data)
    })
});

routes.get('/userinfo', function(req, res) {
  request.get(`https://api.instagram.com/v1/users/self/?access_token=${ACCESS_TOKEN}`,

  function (e, r, data) {
      res.send(data)
    })
});

module.exports = routes;
