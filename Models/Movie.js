const mongoose = require('mongoose');


const movieSchema = new mongoose.Schema({
    Title: {
        type: String,
        required: true,
    },
    Runtime: {
        type: String,
        required: true,
    },
    Poster: {
      type: String,
      required: true,
    },
})
const Movie = mongoose.model('movies', movieSchema,'movies');
module.exports = Movie;