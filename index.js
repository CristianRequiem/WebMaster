//Importar módulos
const express = require('express');

//Crear servidor
const app = express();

//Asignar puerto
app.set('port', process.env.PORT || 3333);

//Configurar carpeta como pública
app.use(express.static('public'));

//Levantar el servidor
app.listen(app.get('port'), ()=>{
    console.log('Servidor levantado en el puerto ' + app.get('port'))
});