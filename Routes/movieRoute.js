const express = require('express')
const { getAllMovie, createMovie, insertMovies } = require('../Controllers/movieController')


const movieRoute = express.Router()


movieRoute.get('/test',getAllMovie)
movieRoute.post('/test',createMovie)
movieRoute.post('/insert-many',insertMovies)

 
module.exports = movieRoute;