module.exports = (app, passport) => {
    const Page = require('../models/pages');
    const User = require('../models/users');
    const mongoose = require('mongoose');

    // Ver editor de página principal
    app.get('/admin/edit-main-page', IsLoggedIn, async function(req, res){
        let main_page = await Page.findOne({page_type:'main'},{
            title: true,
            html: true,
            css: true,
            js: true
        });
        res.render('edit-main-page', {
            user: req.user,
            main_page
        });
    });

    // Desplegar página principal
    app.get('/main-page', async function(req, res){
        let main_page = await Page.findOne({page_type:'main'},{
            title: true,
            html: true,
            css: true,
            js: true
        });
        res.render('main-page', {
            user: req.user,
            main_page
        });
    });

    // Guardar contenido de página principal
    app.put('/admin/:id/save-page', IsLoggedIn, function(req, res){
        let { id } = req.params;
        Page.update({_id: id},{
            html: req.body.html,
            css: req.body.css,
            js: req.body.js
        })
        .then((result)=>{
            res.send(result);
            res.end();
        })
        .catch((error)=>{
            res.send(error);
            res.end();
        })
    });

    // Listar páginas genéricas
    app.get('/admin/pages', IsLoggedIn, async function(req, res){
        let pages = await Page.find({page_type: {$ne: 'main'}});
        res.render('pages', {
            user: req.user,
            pages
        });
    });

    // Crear nueva página
    app.post('/admin/pages/create', IsLoggedIn, function(req, res){
        let newPage = new Page({
            title: req.body.title,
            description: req.body.description,
            url: req.body.url,
            active: req.body.active,
            page_type: req.body.page_type
        })
        newPage.save()
        .then((data)=>{
            res.send(data);
            res.end();
        })
        .catch((error)=>{
            res.send(error);
            res.end();
        });
        console.log('id pagina creada:' + newPage._id)
        console.log('id usuario actual: ' + req.user._id)
        User.update({_id: mongoose.Types.ObjectId(req.user._id)}, {
            $push:{'local.pages': mongoose.Types.ObjectId(newPage._id)}
        });
    });

    // Función para editar página
    app.get('/admin/pages/:id/edit', IsLoggedIn, async function(req, res){
        let page = await Page.find({_id: req.params.id},{
            title: true,
            html: true,
            css: true,
            js: true
        });
        res.render('edit-page', {
            user: req.user,
            page
        });
    });

    // Función para eliminar página
    app.delete('/admin/pages/:id/delete', function(req, res){
        let { id } = req.params;
        Page.remove({_id: id})
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