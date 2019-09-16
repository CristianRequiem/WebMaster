const express = require('express');
const router = express.Router();

const User = require('../models/users');

//Login
router.get('/', function(req, res){
    res.render('index')
})

//admin
router.get('/admin/', function(req, res){
    res.render('admin')
})

//Configuración de perfil
router.get('/admin/edit-profile/', function(req, res) {
    res.render('edit-profile')
})

//Editar página principal
router.get('/admin/edit-main-page/', function(req, res){
    res.render('edit-main-page')
})

//Listar archivos
router.get('/admin/files/', function(req, res){
    res.render('files')
})

//Listar Comentarios
router.get('/admin/comentaries/', function(req, res){
    res.render('comentaries')
})

//Listar páginas
router.get('/admin/pages/', function(req, res){
    res.render('pages')
})

//Listar entradas
router.get('/admin/posts/', function(req, res){
    res.render('posts')
})

//Listar temas
router.get('/admin/templates/', function(req, res){
    res.render('templates')
})

//Listar usuarios
router.get('/admin/users/', function(req, res){
    res.render('users')
})

module.exports = router;