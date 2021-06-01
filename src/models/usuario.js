const mongoose = require('mongoose');
const {Schema} = mongoose;

const Usuario = new Schema({
        correo: String,
        contr: String,
});

module.exports = mongoose.model('Usuario', Usuario);