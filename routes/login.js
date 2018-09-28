const express = require('express');
const router = express.Router();
const Model = require("../models");
const Authors = Model.Authors;
const Articles = Model.Articles;
const Tags = Model.Tags;


router.get('/',function(request, response, next){
    response.render("login");
});

module.exports = router;