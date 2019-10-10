module.exports = (app, passport) => {
    const User = require('../models/users');
    const bcrypt = require('bcrypt-nodejs');

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
        let password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(8), null);
        await User.update({_id:id}, {
            "local.user_name": req.body.user_name,
            "local.first_name": req.body.first_name,
            "local.last_name": req.body.last_name,
            "local.email": req.body.email,
            "local.password": password
        });
        res.redirect('/admin');
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
    app.post('/admin/users/create', IsLoggedIn, (req, res) => {
        let password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(8), null);
        let user = new User({
            "local.user_name": req.body.user_name,
            "local.first_name": req.body.first_name,
            "local.last_name": req.body.last_name,
            "local.email": req.body.email,
            "local.password": password,
            "local.user_type": req.body.user_type
        });
        user.save()
        .then((data)=>{
            res.send(data);
            res.end();
        })
        .catch((error)=>{
            res.send(error);
            res.end();
        });
    });

    // Eliminar usuario
    app.delete('/admin/users/:id/delete', IsLoggedIn, (req, res) =>{
        const { id } = req.params;
        User.remove({_id: id})
        .then((result)=>{
            res.send(result);
            res.end();
        })
        .catch((error)=>{
            res.send(error);
            res.end();
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

