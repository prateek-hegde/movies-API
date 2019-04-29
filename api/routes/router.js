const express = require("express");
var router = express();

const movieController = require('../controllers/controller')
const movieSchema = require('../schemas/movies_schema')

const bodyValidator = require('../middlewares/body_validator')

//Add Movie
router.post('/add-movie',
    bodyValidator(movieSchema),
    movieController.addMovie);

//List all movies
router.get('/all-movies', movieController.listMovies)

//Delete a Movie
router.delete('/delete-movie/:movieId', movieController.deleteMovie)


router.put('/edit-movie/:movieId',
    bodyValidator(movieSchema),
    movieController.editMovie)


router.post('/truck', movieController.postData)

router.get('/truck/data', movieController.getData)

module.exports = router;