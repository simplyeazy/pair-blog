const Model = require("../models");
const Authors = Model.Author;

class AuthorController {
    static GetAllAuthor(request, response) {
        Authors.findAll()
            .then(function (data) {
                response.render("authors", { data: data });
            })
            .catch(function (error) {
                console.log(error);
            });
    }
}