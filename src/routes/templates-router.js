module.exports = (app, passport) => {
    const Template = require('../models/templates');

    // Listar temas
    app.get('/admin/templates', IsLoggedIn, function(req, res){
        res.render('templates', {
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