'use strict';

// require('dotenv').config();

require('./services/database')

const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const helmet = require('helmet');


var app = express();


const PORT = process.env.PORT || 3000;

app.use(helmet());


app.use(morgan('dev'));


//body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


//Routes
const routes = require('./api/routes/router');
app.use('/api/', routes);




// Catch 404
app.use((req, res, next) => {
    res.status(404).send({
        success: false,
        message: "Invalid Route"
    });
});



// Error handler
app.use((error, req, res, next) => {
    console.log(error);

    res.status(error.status || 500);
    if (error.status != 500) {
        error = error.message;
    }
    res.send({
        success: false,
        message: error
    });
});



app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

module.exports = app