const Movie = require("../models/movies_model");


//Add a Movie
module.exports.addMovie = async (req, res) => {

    var movieObj = {
        title: req.body.title,
        year: req.body.year,
        summary: req.body.summary,
        category: req.body.category
    }


    try {
        var movie = await Movie.create(movieObj)
        return res.send({
            success: true,
            message: 'Movie added!',

        })
    } catch (error) {
        if (error.code == 11000) {
            return res.status(403).send({
                success: false,
                message: 'duplicate movie title',
            })
        }
        return res.status(403).send({
            success: false,
            message: 'Unable to add a movie!',
        })
    }

}

//List all Movies
module.exports.listMovies = async (req, res) => {
    try {
        var movies = await Movie.find()
    } catch (error) {
        console.log(error);
        return res.send({
            success: false,
            message: 'unable to fetch movies',
            error: error
        })
    }

    if (movies == []) {
        return res.send(movies)
    }


    var categories = []
    var finalArray = []
    var temp = []
    var movieObj = {}

    for (const movie of movies) {
        if (!categories.includes(movie.category)) {
            categories.push(movie.category)
        }
    }


    for (let i = 0; i < categories.length; i++) {
        for (const movie of movies) {

            if (categories[i] === movie.category) {
                temp.push(movie)
            }
        }
        movieObj[categories[i]] = temp
        finalArray.push(movieObj)
        movieObj = {}
        temp = []
    }

    return res.send(finalArray)
}

//Delete Movie
module.exports.deleteMovie = async (req, res) => {
    var movieId = req.params.movieId

    try {
        var movie = await Movie.findByIdAndDelete({ _id: movieId })
        return res.send({
            success: true,
            message: 'Movie deleted'
        })
    } catch (error) {
        return res.send({
            success: false,
            message: 'unable to delete movie',
            error: error
        })
    }
}

//Edit Movie
module.exports.editMovie = async (req, res) => {
    var movieId = req.params.movieId;

    try {
        var movie = await Movie.findOneAndReplace({ _id: movieId }, { $set: req.body })
        return res.send({
            success: true,
            message: 'Movie updated'
        })
    } catch (error) {
        return res.send({
            success: false,
            message: 'Unable to update the Movie'
        })
    }
}

