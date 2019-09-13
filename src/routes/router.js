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
router.get('/edit-profile/', function(req, res) {
    res.render('edit-profile')
})

//Editar página principal
router.get('/edit-main-page/', function(req, res){
    res.render('edit-main-page')
})

module.exports = router;