module.exports = (app, passport) => {
    const File = require('../models/files');
    const multer = require('multer');
    const storage = multer.diskStorage({
        destination: './public/uploads',
        filename: function (req, file, cb) {
          cb(null, Date.now() + '-' + file.originalname)
        }
    });
    const upload = multer({storage: storage});

    // Listar archivos
    app.get('/admin/files', IsLoggedIn, async function(req, res){
        let files = await File.find();
        res.render('files',{
            user: req.user,
            files
        });
    });

    // Función para guardar archivo
    app.post('/admin/files/upload', upload.single('file'), IsLoggedIn, async(req, res) => {
        let document = req.body
        let file = req.file;
        try {
            await File.create({
                name: document['name'],
                description: document['description'],
                file_type: document['file_type'],
                file_path: file.path.substring(6),
                shortcut: '<img src="" alt="">'
            });
            res.redirect('/admin/files');
        }
        catch {
            console.error('Error al subir el archivo');
        }
    });

    // Función para obtener archivo
    app.get('/admin/files/:id/get', IsLoggedIn, function(req, res){
        let { id } = req.params;
        File.find({_id: id})
        .then((data)=>{
            res.send(data[0]);
            res.end();
        })
        .catch((error)=>{
            res.send(error);
            res.end();
        })
    })

    // Función para actualizar archivo
    app.put('/admin/files/:id/update', IsLoggedIn, function(req, res){
        let { id } = req.params;
        File.update({_id: id}, {
            name: req.body.name,
            description: req.body.description
        })
        .then((result)=>{
            res.send(result);
            res.end();
        })
        .catch((error)=>{
            res.send(error);
            res.end();
        })
    })

    // Función para eliminar archivo
    app.delete('/admin/files/:id/delete', IsLoggedIn, function(req, res){
        let { id } = req.params;
        File.remove({_id: id})
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