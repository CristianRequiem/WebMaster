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

    // Función para eliminar archivo
    app.get('/admin/files/:id/delete', IsLoggedIn, async function(req, res){
        let { id } = req.params;
        try {
            await File.remove({_id: id});
            res.redirect('/admin/files');
        }
        catch {
            console.error("Error al eliminar el archivo");
        }
    });

    // Funcion para comprobar si el usuario ha iniciado sesion
    function IsLoggedIn(req, res, next){
        if(req.isAuthenticated()){
            return next();
        }
        return res.redirect('/');
    };
}