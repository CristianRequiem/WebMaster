module.exports = (app, passport) => {
    const Comentary = require('../models/comentaries');

    // Listar Comentarios
    app.get('/admin/comentaries', IsLoggedIn, function(req, res){
        res.render('comentaries', {
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