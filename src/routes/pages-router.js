module.exports = (app, passport) => {
    const Page = require('../models/pages');

    // Listar páginas
    app.get('/admin/pages', IsLoggedIn, function(req, res){
        res.render('pages', {
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