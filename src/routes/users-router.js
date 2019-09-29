module.exports = (app, passport) => {
    const User = require('../models/users');

    // Login
    app.get('', function(req, res){
        res.render('index', {
            message: req.flash('loginMessage')
        });
    });

    // Signup
    app.get('/signup', function(req, res){
        res.render('signup', {
            message: req.flash('signupMessage')
        });
    })

    // Local-Login
    app.post('/login', passport.authenticate('login', {
        successRedirect: '/admin',
        failureRedirect: '/',
        failureFlash: true
    }));

    // Local-Signup
    app.post('/signup', passport.authenticate('signup', {
        successRedirect: '/admin',
        failureRedirect: '/signup',
        failureFlash: true
    }));

    // Logout
    app.get('/logout', function(req, res){
        req.logout();
        res.redirect('/');
    });

    // Pantalla inicial Admin
    app.get('/admin', IsLoggedIn, function(req, res){
        res.render('admin', {
            user: req.user
        });
    });
    
    // Configuración de perfil
    app.get('/admin/edit-profile', IsLoggedIn, function(req, res) {
        res.render('edit-profile', {
            user: req.user
        });
    });
    
    // Editar página principal
    app.get('/admin/edit-main-page', IsLoggedIn, function(req, res){
        res.render('edit-main-page',{
            user: req.user
        });
    });
    
    // Listar usuarios
    app.get('/admin/users', IsLoggedIn, function(req, res){
        res.render('users', {
            user: req.user
        });
    });

    // Crear usuario
    app.post('/admin/users/create', async(req, res) => {
        const user = new User(req.body);
        await user.save();
        //res.redirect('/');
    });

    // Funcion para comprobar si el usuario ha iniciado sesion
    function IsLoggedIn(req, res, next){
        if(req.isAuthenticated()){
            return next();
        }
        return res.redirect('/');
    };
}

