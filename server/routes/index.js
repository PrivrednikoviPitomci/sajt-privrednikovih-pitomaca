var express = require('express');
var router = express.Router();

var pitomciService = require('../pitomac-service');

router.get('/pitomci', function(req, res, next) {  
 pitomciService.get(req,res);
});

router.post('/pitomac', function(req,res,next){
  pitomciService.create(req, res); 
});

module.exports = router;
