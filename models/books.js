const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const booksSchema = new Schema({

    title: {
        type: String,
        required: true
    },

    authors: {
        type: String,
        required: true
    },

    synopsis: { //called snippet in JSON object, might not need this here?
        type: String,
        required: true
    },

    url: {
        type: String,
        required: true
    },

    image: {
        type: String,
        required: true
    }

});

const Books = mongoose.model("Books", booksSchema);

module.exports = Books;