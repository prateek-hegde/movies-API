const { buildSchema } = require("graphql");

module.exports = buildSchema(`
    type Movie {
        title: String!
        year: Int!
        summary: String!
    }

    type MoviesQuery {
        listMovies: [Movie]!
    }

    schema {
        query: MoviesQuery
    }
`);

module.exports = buildSchema(`
    type Movie {
        title: String!
        year: Int!
        summary: String!
    }

    input MoviesInputData {
        title: String!
        year: Int!
        summary: String!
    }

    

    type RootMutation {
        addMovie(input: MoviesInputData): Movie!
    }

    schema {
        
        mutation: RootMutation
    }
`);
