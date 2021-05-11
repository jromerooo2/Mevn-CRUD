const mongoose = require('mongoose');
const {Schema} = mongoose;

const Asegurado = new Schema({
        nombre: String,
        edad: Number
});

module.exports = mongoose.model('Asegurado', Asegurado);