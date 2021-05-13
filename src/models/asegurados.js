const mongoose = require('mongoose');
const {Schema} = mongoose;

const Asegurado = new Schema({
        nombre: String,
        apellidos: String,
        aseguradora: String,
        numeroTele: String,
        numeroPoliza: String,
        fechadeNacimiento: String
});

module.exports = mongoose.model('Asegurado', Asegurado);