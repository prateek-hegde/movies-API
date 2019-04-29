const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var TruckSchema = new Schema({

    door: {
        type: Boolean,
        required: true,
    },
    lamp: {
        type: Boolean,
        required: true
    },
 

});

const Truck = mongoose.model('Truck', TruckSchema);
module.exports = Truck;

