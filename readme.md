Installation Steps:
    npm install
    npm start

Routes:
    http://localhost:3000

    GET routes
        /api/all-movies

    POST routes
        /api/add-movie
        Parameters: title (String), year (Number), summary (String), category (String)
        (All parameters are required)

    DELETE routes
        /api/delete-movie/:movieId
    
    PUT routes
        /api/edit-movie/:movieId
        Parameters: title (String), year (Number), summary (String), category (String)
        (All parameters are required)