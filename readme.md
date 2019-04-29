Installation Steps:
    npm install
    npm start

Routes:
        Local
            http://localhost:3000
        Development
            https://damp-badlands-51941.herokuapp.com

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