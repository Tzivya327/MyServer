var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const DistanceSchema = new Schema({
    target:String,
    source :String,
    distance :Number,
    numAsks: Number
});

module.exports = mongoose.model('Distance', DistanceSchema);


