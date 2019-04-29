const joi = require('joi');

var movieSchema = joi.object({
    _id: joi.string().allow(),
    category: joi.string().required(),
    title: joi.string().required(),
    year: joi.number().required(),
    summary: joi.string().required(),

});

module.exports = movieSchema;
