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

    // Actualizar perfil
    app.post('/admin/:id/update', IsLoggedIn, async (req, res) => {
        let {id} = req.params;
        await User.update({_id:id}, {
            "local.user_name": req.body.user_name,
            "local.first_name": req.body.first_name,
            "local.last_name": req.body.last_name,
            "local.email": req.body.email,
            "local.password": req.body.password
        });
        res.redirect('/admin');
    });
    
    // Editar página principal
    app.get('/admin/edit-main-page', IsLoggedIn, function(req, res){
        res.render('edit-main-page', {
            user: req.user
        });
    });
    
    // Listar usuarios
    app.get('/admin/users', IsLoggedIn, async (req, res) => {
        let users = await User.find();
        console.log(users);
        res.render('users', {
            user: req.user,
            users
        });
    });

    // Crear usuario
    app.post('/admin/users/create', IsLoggedIn, async(req, res) => {
        const user = new User({
            "local.user_name": req.body.user_name,
            "local.first_name": req.body.first_name,
            "local.last_name": req.body.last_name,
            "local.email": req.body.email,
            "local.password": req.body.password,
            "local.user_type": req.body.user_type
        });
        await user.save();
        res.redirect('/admin/users');
    });

    // Funcion para comprobar si el usuario ha iniciado sesion
    function IsLoggedIn(req, res, next){
        if(req.isAuthenticated()){
            return next();
        }
        return res.redirect('/');
    };
}

