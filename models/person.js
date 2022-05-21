const mongoose = require('mongoose'); //inyectamos dependencia de mogoose
let PersonSchema = new mongoose.Schema ({ //creamos el modelo de la persona con todo los elementos que sebe contener
    nombre: String,
    edad: Number,
    tipoSangre: String,
    nss: String
});
module.exports = mongoose.model('Persons', PersonSchema);