const express = require('express');
const router = express.Router();
const Model = require("../models");
const Authors = Model.Authors;
const Articles = Model.Articles;
const Tags = Model.Tags;
router.get('/', function (request, response, next) {
    response.send("atrikel blog here");
});

router.get('/:id', function (request, response, next) {
    //response.send(`atrikel berita here ${request.params.id}`);
    Articles.findOne({
        include: [{
            model: Authors
        }, {
            model: Tags
        }],
        where: [{
            id: request.params.id
        }]
    })
        .then(function (data) {
            //response.json(data);
            response.render("articles", { data: data });
        })
        .catch(function (error) {
            console.log(error);
        });
});

router.get('/', function(request, response, next){
    Articles.findAll()
        .then(function (data){
            response.render('article/index', {data: data})
        })
        .catch(function (err){
            console.log(err)
        })
})

module.exports = router;