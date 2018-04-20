const mongoose = require('mongoose');
const Schema = mongoose.Schema

const PitomacSchema = new Schema({
    id: {type: Number, required: true, unique: true},
    name: String
});

const Pitomac = mongoose.model('Pitomac', PitomacSchema);
module.exports = Pitomac;