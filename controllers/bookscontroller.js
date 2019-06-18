const db = require("../models");

// Define the methods for the bookController
module.exports = {
    findAll: function (req, res) {
        db.Books.find(req.query)
            .then(dbBooks => res.json(dbBooks))
            .catch(err => res.status(422).json(err));
    },
    findById: function (req, res) {
        db.Books.findById(req.params.id)
            .then(dbBooks => res.json(dbBooks))
            .catch(err => res.status(422).json(err));
    },
    create: function (req, res) {
        db.Books.create(req.body)
            .then(dbBooks => res.json(dbBooks))
            .catch(err => res.status(422).json(err));
    },
    update: function (req, res) {
        db.Books.findOneAndUpdate({ id: req.params.id }, req.body)
            .then(dbBooks => res.json(dbBooks))
            .catch(err => res.status(422).json(err));
    },
    remove: function (req, res) {
        db.Books.findById(req.params.id)
            .then(dbBooks => dbBooks.remove())
            .then(dbBooks => res.json(dbBooks))
            .catch(err => res.status(422).json(err));
    }
};