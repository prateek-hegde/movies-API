"use strict";

// require('dotenv').config();

require("./services/database");

const path = require('path');
const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const helmet = require("helmet");
const graphql = require("express-graphql");

const publicPath = path.join(__dirname, './public');

var app = express();
app.use('/public',express.static(publicPath));

const PORT = process.env.PORT || 8000;

app.use(helmet());

app.use(morgan("dev"));

//body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));



//Routes
const routes = require('./api/routes/router');
app.use('/api/', routes);

// app.use('/static', express.static(path.join(__dirname, 'public')))
// const graphqlSchema = require("./api/graphql/schema");
// const graphqlResolver = require("./api/graphql/resolvers");

// app.use(
//   "/graphql",
//   graphql({
//     schema: graphqlSchema,
//     rootValue: graphqlResolver,
//     graphiql: true
//   })
// );

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

module.exports = app;
