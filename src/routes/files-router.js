module.exports = (app, passport) => {
    const File = require('../models/files');

    // Listar archivos
    app.get('/admin/files', IsLoggedIn, function(req, res){
        res.render('files',{
            user: req.user
        });
    });

    // Funcion para comprobar si el usuario ha iniciado sesion
    function IsLoggedIn(req, res, next){
        if(req.isAuthenticated()){
            return next();
        }
        return res.redirect('/');
    };
}