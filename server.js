const mongoose = require('mongoose'); //inyectamos la dependencia de mongoose
const express = require('express'); //inyectaoms la depensencia de express
const personsRoutes = require('./routes/persons'); //inyectamos la dependencia de persons.js que se encuentra en la carpeta routes

mongoose.Promise = global.Promise; 
const app = express();

app.set('view engine', 'ejs');
app.use(express.urlencoded( {extended:false} ));
app.use(personsRoutes);

mongoose.connect(
    'mongodb+srv://karla:123@cluster0.p9dla.mongodb.net/?retryWrites=true&w=majority',//Con este link nos podemos conectar a la base de datos que creamos utiizando mongodb atlas
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: ")); //En caso de que haya un error nos lo va a mostrar en consola
db.once("open", function () {
    console.log("Connected succesfully"); //Cuando levantemos el servidor nos mostrará este mensaje en consola
});

app.listen(3000);