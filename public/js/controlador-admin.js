function generarArchivos(){
    document.getElementById('titulo').innerHTML = 'Archivos';
    //document.getElementsById('cuerpo').innerHTML = '';
    document.getElementById('cuerpo').innerHTML =
    `
    <div class="row">
        <div class="col-4 card card-body ml-4">
            <form action="" method="">
                <div class="form-group">
                    <input type="text" class="form-control" placeholder="Nombre del archivo">
                </div>
                <div class="form-group">
                    <input type="text" class="form-control" placeholder="Descripción del archivo">
                </div>
                <div class="form-group">
                    <input type="text" class="form-control" placeholder="Dirección del archivo">
                </div>
                <div class="form-group mt-4">
                    <select name="tipo-archivo" id="Seleccione un tipo de archivo" class="form-control">
                        <option value="0">Seleccione un tipo</option>
                        <option value="img">Imagen</option>
                        <option value="video">Video</option>
                        <option value="gen">Genérico</option>
                    </select>
                </div>
                <div class="row mt-4">
                    <button type="button" class="btn btn-primary mx-auto">Guardar</button>
                </div>
            </form>
        </div>
        <div class="col-6 mx-auto">
            <div class="row">
                <div class="col-4">
                    <button type="button" class="btn btn-success">Galería de Fotos</button>
                </div>
                <div class="col-4">
                    <button type="button" class="btn btn-success">Galería de Videos</button>
                </div>
                <div class="col-4">
                    <button type="button" class="btn btn-success">Galería de Archivos</button>
                </div>
            </div>
        </div>
    </div>
    `
    ;
}

function generarComentarios(){
    document.getElementById('titulo').innerHTML = 'Comentarios';
    //document.getElementById('cuerpo').innerHTML = '';
    document.getElementById('cuerpo').innerHTML = 
    `
    <div class="row">
        <div class="col-8 mx-auto">
            <table class="table table-borderless table-hover">
                <thead>
                    <td><b>Usuario</b></td>
                    <td><b>Entrada</b></td>
                    <td><b>Comentario</b></td>
                    <td colspan="2"><b>Acciones</b></td>
                </thead>
                <tbody>
                    <tr>
                        <td>Usuario 1</td>
                        <td>Entrada 1</td>
                        <td>Lorem Ipsum</td>
                        <td>
                            <button type="button" class="btn btn-warning mx-2" title="Inapropiado"><span class="fas fa-exclamation-triangle"></span>
                            <button type="button" class="btn btn-danger mx-2" title="Eliminar"><span class="fas fa-trash-alt"></span>
                        </td>
                    </tr>
                    <tr>
                        <td>Usuario 1</td>
                        <td>Entrada 1</td>
                        <td>Lorem Ipsum</td>
                        <td>
                            <button type="button" class="btn btn-warning mx-2" title="Inapropiado"><span class="fas fa-exclamation-triangle"></span>
                            <button type="button" class="btn btn-danger mx-2" title="Eliminar"><span class="fas fa-trash-alt"></span>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    `
    ;
}

function generarUsuarios(){
    document.getElementById('titulo').innerHTML = 'Usuarios';
    document.getElementById('cuerpo').innerHTML = 
    `
    <div class="row">
        <div class="col-4 mx-auto">
            <table class="table table-borderless table-hover">
                <tr>
                    <td><a href="#" class="btn btn-success" style="width:200px;" data-toggle="modal" data-target="#modalCrearUsuario">Crear usuario</a></td>
                    <td><a href="#" class="btn btn-success" style="width:200px;" data-toggle="modal" data-target="#modalCrearRol">Crear rol</a></td>
                </tr>
            </table>
        </div>
    </div>
    <div class="row">
        <div class="col-12 col-md-6 mx-auto">
            <table class="table table-borderless table-hover">
                <thead>
                    <td><b>Usuario</b></td>
                    <td><b>Nombre</b></td>
                    <td><b>Apellido</b></td>
                    <td><b>Email</b></td>
                    <td><b>Contraseña</b></td>
                    <td><b>Rol</b></td>
                    <td><b>Acciones</b></td>
                </thead>
                <tbody>
                    <tr>
                        <td>john_doe</td>
                        <td>John</td>
                        <td>Doe</td>
                        <td>johndoe@yahoo.com</td>
                        <td>1234</td>
                        <td>Genérico</td>
                        <td><a href="#" class="btn btn-dark" title="Editar" style="font-size:10px;"><span class="fas fa-user-edit"></span></a></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    `;
}

function generarEntradas(){
    document.getElementById('titulo').innerHTML = 'Entradas/Posts';
    document.getElementById('cuerpo').innerHTML = 
    `
    <div class="row ml-5 mt-2">
        <a href="#" class="btn btn-success" data-toggle="modal" data-target="#modalCrearEntrada">Crear entrada</a>
    </div>
    <div class="row mt-5">
        <div class="col-12 ml-4">
            <table class="table table-borderless table-hover">
                <thead>
                    <td><b>Título</b></td>
                    <td><b>Autor</b></td>
                    <td><b>Fecha</b></td>
                    <td><b>Categoría</b></td>
                    <td><b>Acciones</b></td>
                </thead>
                <tbody>
                    <tr>
                        <td>Entrada 1</td>
                        <td>John Doe</td>
                        <td>12/12/12</td>
                        <td>Categoría 1</td>
                        <td>
                            <a href="#" class="btn btn-info mx-2" title="Ver" style="font-size:10px;"><span class="fas fa-eye"></span></a>
                            <a href="#" class="btn btn-dark mx-2" title="Editar" style="font-size:10px;"><span class="fas fa-edit"></span></a>
                            <a href="#" class="btn btn-danger mx-2" title="Eliminar" style="font-size:10px;"><span class="fas fa-trash-alt"></span></a>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    `;
}