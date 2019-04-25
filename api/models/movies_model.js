const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var MovieSchema = new Schema({

    title: {
        type: String,
        required: true,
        unique: true
    },
    year: {
        type: String,
        required: true
    },
    summary: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    }

});

const Movie = mongoose.model('Movie', MovieSchema);
module.exports = Movie;

