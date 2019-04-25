const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var CategorySchema = new Schema({

    category: {
        type: String,
        required: true,
        unique: true
    },
    movies: [{
        type: Schema.Types.ObjectId,
        ref: 'Movie'
    }]


});

const Category = mongoose.model('Category', CategorySchema);
module.exports = Category;

