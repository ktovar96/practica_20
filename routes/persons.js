const express = require('express'); //inyectamos dependencia de express
const router = express.Router(); //creamos la contante para el router
const mongooose = require('../node_modules/mongoose'); //inteyectamos la dependencia de mongoose que se encuentra en node_modules
let Person = require('../models/person'); //inyectamos dependencia de person que se encuentra en la carpeta models


router.get('/persons', function(req, res, next) { 
    Person.find(function (err, persons) {
        if (err) return next(err);
        res.json(persons);
    });
});

router.get ('/person', function (req, res) { //Creamos una ruta con el metodo get para renderizar 'person'
    res.render('person');
});

router.post('/addPerson', function(req, res) { //Creamos una ruta con el metodo post para enviar los datos de la persona y se pueda agregar a la base de datos
    const myPerson = new Person ({
        nombre: req.body.nombre,
        edad: req.body.edad,
        tipoSangre: req.body.tipoSangre,
        nss: req.body.nss }); //crea la entidad
    myPerson.save(); //guarda en la base de datos
});

module.exports = router;