const express = require('express');
const router = express.Router();
const Model = require("../models");
const Authors = Model.Authors;
const Articles = Model.Articles;
const AuthorController = require("../controllers/authorcontroller");
/* GET authors listing. */

router.get('/', function (request, response, next) {
  Authors.findAll({
    include: [{
      model: Articles
    }]
  })
    .then(function (data) {
      response.json(data);
      //response.render("authors", { data: data });
    })
    .catch(function (error) {
      console.log(error);
    });
});

router.get('/add', function (request, response, next) {

});





module.exports = router;
