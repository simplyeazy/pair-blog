const express = require('express');
const router = express.Router();
const Model = require("../models");
const Articles = Model.Articles;
const Authors = Model.Authors;


router.get('/',function(request, response, next){
    response.render("about");
});

module.exports = router;