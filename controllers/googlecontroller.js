const db = require("../models");
const axios = require("axios");

// Define the methods for the googleController


module.exports = {
    findAll: function (req, res) {

        const { query: params } = req;
        axios
            .get("AIzaSyB3KjUtoheFv963i0VyQmTDB8c0HwcAofQ", {
                params
            })
            .then(results =>
                results.data.items.filter(
                    result =>
                        result.volumeInfo.title &&
                        result.volumeInfo.infoURL &&
                        result.volumeInfo.authors &&
                        result.volumeInfo.synopsis &&
                        result.volumeInfo.imageLinks &&
                        result.volumeInfo.imageLinks.thumbnail
                )
            )
            .then(apiBooks =>
                db.Books.find().then(dbBooks =>
                    apiBooks.filter(apiBook =>
                        dbBooks.every(dbBooks => dbBooks.googleId.toString() !== apiBook.id)
                    )
                )
            )
            .then(books => res.json(books))
            .catch(err => res.status(422).json(err));
    }
};