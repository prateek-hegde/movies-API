const Movie = require("../models/movies_model");
module.exports = {
  listMovies: async () => {
    const movies = await Movie.find();
    return movies;
  }
};

module.exports = {
  addMovie: async ({ input }, req) => {
    var movieObj = {
      title: input.title,
      year: input.year,
      summary: input.summary,
      category: 'test'
    };

    try {
      var movie = await Movie.create(movieObj);
    } catch (error) {
      console.log(error);
    }

    return movie;
  }
};

// module.exports = {
//     hello: () => {
//       return 'Hello World!';
//     }
//   };
