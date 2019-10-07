module.exports = (app, passport) => {
    const Post = require('../models/posts');
    const User = require('../models/users');
    const Category = require('../models/categories');
    const mongoose = require('mongoose');

    // Listar entradas
    app.get('/admin/posts', IsLoggedIn, async function(req, res){
        let posts = await Post.find();
        res.render('posts', {
            user: req.user,
            posts
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