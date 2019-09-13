//Importar módulos
const express = require('express');
const path = require('path');
const morgan = require('morgan');
const mongoose = require('mongoose');

//Crear servidor
const app = express();

//Cargar rutas
const indexRoutes = require('./src/routes/router');

//Configuraciones
app.set('views', path.join(__dirname, './public/views'));
app.set('view engine', 'ejs');

//Middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));

//Asignar puerto
app.set('port', process.env.PORT || 3333);

//Configurar carpeta como pública
app.use(express.static('public'));

//Rutas
app.use('/', indexRoutes);

//Levantar el servidor
app.listen(app.get('port'), ()=>{
    console.log('Servidor levantado en el puerto ' + app.get('port'))
});