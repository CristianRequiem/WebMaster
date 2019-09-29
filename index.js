// Importar módulos
const express = require('express');
const path = require('path');
const morgan = require('morgan');
const mongoose = require('mongoose');
const passport = require('passport');
const flash = require('connect-flash');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const session = require('express-session');

// Crear servidor
const app = express();

// Conectar a la BD
const { url } = require('./src/config/database');
mongoose.connect(url)
    .then(db => console.log('Conectado a la base de datos de WebMaster'))
    .catch(err => console.log(err));

// Configuraciones
app.set('views', path.join(__dirname, './public/views'));
app.set('view engine', 'ejs');
app.set('port', process.env.PORT || 3333);

// Importar configuaricón de passport
require('./src/config/passport')(passport);

// Middlewares
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(session({
    secret: 'secretWebMaster',
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

// Configurar carpeta como pública
app.use(express.static('public'));

// Rutas
require('./src/routes/users-router')(app, passport);
require('./src/routes/comentaries-router')(app, passport);
require('./src/routes/files-router')(app, passport);
require('./src/routes/pages-router')(app, passport);
require('./src/routes/posts-router')(app, passport);
require('./src/routes/roles-router')(app, passport);
require('./src/routes/shortcuts-router')(app, passport);
require('./src/routes/templates-router')(app, passport);

// Levantar el servidor
app.listen(app.get('port'), ()=> {
    console.log('Servidor levantado en el puerto ' + app.get('port'))
});