const express = require('express');
const router = express.Router();
const Model = require("../models");
const Articles = Model.Articles;
const Authors = Model.Authors;
/* GET home page. */
router.get('/', function (request, response, next) {
  Articles.findAll({
    include: [{
      model: Authors
    }]
  })
    .then(function (data) {
      //response.json(data);
      response.render('index', { title: 'Express', data: data });
    })
    .catch(function (error) {
      console.log(error);
    });
});

module.exports = router;
