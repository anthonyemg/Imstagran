const routes = require('express').Router();
var request = require('request');

routes.post('/retrieve/photos', function(req, res){
  request.get(`https://www.instagram.com/${req.body.data}/media/`,
    function (e, r, data) {
      res.send(data)
    })
});

module.exports = routes;
