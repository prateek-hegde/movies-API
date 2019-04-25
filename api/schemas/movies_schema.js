const joi = require('joi');

var movieSchema = joi.object({
    category: joi.string().required(),
    title: joi.string().required(),
    year: joi.number().required(),
    summary: joi.string().required(),

});

module.exports = movieSchema;
