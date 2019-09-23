module.exports = (app, passport) => {
    const User = require('../models/users');

    // Login
    app.get('/', function(req, res){
        res.render('index');
    });
    
    // admin
    app.get('/admin/', function(req, res){
        res.render('admin');
    });
    
    // Configuración de perfil
    app.get('/admin/edit-profile/', function(req, res) {
        res.render('edit-profile');
    });
    
    // Editar página principal
    app.get('/admin/edit-main-page/', function(req, res){
        res.render('edit-main-page');
    });
    
    // Listar archivos
    app.get('/admin/files/', function(req, res){
        res.render('files');
    });
    
    // Listar Comentarios
    app.get('/admin/comentaries/', function(req, res){
        res.render('comentaries');
    });
    
    // Listar páginas
    app.get('/admin/pages/', function(req, res){
        res.render('pages');
    });
    
    // Listar entradas
    app.get('/admin/posts/', function(req, res){
        res.render('posts');
    });
    
    // Listar temas
    app.get('/admin/templates/', function(req, res){
        res.render('templates');
    });
    
    // Listar usuarios
    app.get('/admin/users/', function(req, res){
        res.render('users');
    });

}

