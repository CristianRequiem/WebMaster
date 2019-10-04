//Función para generar la sección de pantalla de Archivos en Admin
function generarSeccionArchivos(){
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
                    <button type="button" class="btn btn-custom mx-auto">Guardar</button>
                </div>
            </form>
        </div>
        <div class="col-6 mx-auto">
            <div class="row">
                <div class="col-4">
                    <button type="button" class="btn btn-custom">Galería de Fotos</button>
                </div>
                <div class="col-4">
                    <button type="button" class="btn btn-custom">Galería de Videos</button>
                </div>
                <div class="col-4">
                    <button type="button" class="btn btn-custom">Galería de Archivos</button>
                </div>
            </div>
        </div>
    </div>
    `
    ;
}

//Función para generar la sección de pantalla de Comentarios en Admin
function generarSeccionComentarios(){
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

//Función para generar la sección de pantalla de Usuarios en Admin
function generarSeccionUsuarios(){
    document.getElementById('titulo').innerHTML = 'Usuarios';
    document.getElementById('cuerpo').innerHTML = 
    `
    <div class="row">
        <div class="col-4 mx-auto">
            <table class="table table-borderless table-hover">
                <tr>
                    <td><a href="#" class="btn btn-custom" style="width:200px;" data-toggle="modal" data-target="#modalCrearUsuario">Crear usuario</a></td>
                    <td><a href="#" class="btn btn-custom" style="width:200px;" data-toggle="modal" data-target="#modalCrearRol">Crear rol</a></td>
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
                        <td><a href="#" class="btn btn-success" title="Editar" style="font-size:10px;"><span class="fas fa-user-edit"></span></a></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    `;
}

//Función para generar la sección de pantalla de Entradas/Posts en Admin
function generarSeccionEntradas(){
    document.getElementById('titulo').innerHTML = 'Entradas/Posts';
    document.getElementById('cuerpo').innerHTML = 
    `
    <div class="row mt-2">
        <div class="mx-auto">
            <a href="#" class="btn btn-custom" data-toggle="modal" data-target="#modalCrearEntrada">Crear entrada</a>
        </div>
    </div>
    <div class="row mt-2">
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
                            <a href="#" class="btn btn-success mx-2" title="Editar" style="font-size:10px;"><span class="fas fa-edit"></span></a>
                            <a href="#" class="btn btn-danger mx-2" title="Eliminar" style="font-size:10px;"><span class="fas fa-trash-alt"></span></a>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    `;
}

//Función para generar la sección de pantalla de Páginas en Admin
function generarSeccionPaginas(){
    document.getElementById('titulo').innerHTML = 'Páginas';
    document.getElementById('cuerpo').innerHTML = 
    `
    <div class="row mt-2">
        <div class="mx-auto">
            <a href="#" class="btn btn-custom" data-toggle="modal" data-target="#modalCrearPagina">Crear página</a>
        </div>
    </div>
    <div class="row mt-2">
        <div class="col-12 col-md-6 mx-auto">
            <table class="table table-borderless table-hover">
                <thead>
                    <td><b>Nombre de página</b></td>
                    <td><b>Ver</b></td>
                    <td><b>Editar</b></td>
                    <td><b>Eliminar</b></td>
                </thead>
                <tbody>
                    <tr>
                        <td>Página 1</td>
                        <td><a href="#" class="btn btn-info" title="Ver" style="font-size:10px;"><span class="fas fa-eye"></span></a></td>
                        <td><a href="#" class="btn btn-success" title="Editar" style="font-size:10px;"><span class="fas fa-edit"></span></a></td>
                        <td><a href="#" class="btn btn-danger" title="Eliminar" style="font-size:10px;"><span class="fas fa-trash-alt"></span></a></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    `;
}

//Función para generar la sección de pantalla de Temas en Admin
function generarSeccionTemas(){
    document.getElementById('titulo').innerHTML = 'Temas/Plantillas';
    document.getElementById('cuerpo').innerHTML = 
    `
    <div class="row mt-2">
        <div class="mx-auto">
            <a href="#" class="btn btn-custom" data-toggle="modal" data-target="#modalCrearTema">Crear plantilla</a>
        </div>
    </div>
    <div class="row mt-2">
        <div class="col-12 col-md-6 mx-auto">
            <table class="table table-borderless table-hover">
                <thead>
                    <td><b>Nombre del tema</b></td>
                    <td><b>Descripción</b></td>
                    <td><b>Ver</b></td>
                    <td><b>Editar</b></td>
                    <td><b>Eliminar</b></td>
                </thead>
                <tbody>
                    <tr>
                        <td>Plantilla 1</td>
                        <td>Lorem ipsum</td>
                        <td><a href="#" class="btn btn-info" title="Ver" style="font-size:10px;"><span class="fas fa-eye"></span></a></td>
                        <td><a href="#" class="btn btn-success" title="Editar" style="font-size:10px;"><span class="fas fa-edit"></span></a></td>
                        <td><a href="#" class="btn btn-danger" title="Eliminar" style="font-size:10px;"><span class="fas fa-trash-alt"></span></a></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div> 
    `;
}

// Función para crear usuario
function crearUsuario(){
    let persona = {
        first_name: document.getElementById('first_name').value,
        last_name: document.getElementById('last_name').value,
        user_name: document.getElementById('user_name').value,
        email: document.getElementById('email').value,
        password: document.getElementById('password').value,
        user_type: document.getElementById('user_type').value
    };
    let parametros = `first_name=${persona.first_name}&last_name=${persona.last_name}&user_name=${persona.user_name}&email=${persona.email}&password="${persona.password}&user_type=${persona.user_type}`;
    $.ajax({
        url: '/admin/users/create',
        method: 'POST',
        data: parametros,
        dataType: 'json',
        success: (res)=>{
            if(res._id!=undefined)
                anexarFilaUsuario(res);
        },
        error: (error)=>{
            console.error(error);
        }
    });
}

// Anexar fila a la tabla de usuarios
function anexarFilaUsuario(res){
    document.getElementById('cuerpo-tabla').innerHTML +=
    `
    <tr id="${res._id}">
        <td>${res.user_name}</td>
        <td>${res.first_name}</td>
        <td>${res.last_name}</td>
        <td>${res.email}</td>
        <td>${res.user_type}</td>
        <td><button onclick="eliminarUsuario(${res._id})" class="btn btn-danger"
            title="Eliminar" style="font-size:7px;"><span class="fas fa-trash-alt"></span></button>
        </td>
    </tr>
    `
}

// Función para eliminar ususario
function eliminarUsuario(id){
    $.ajax({
        url: `/admin/users/${id}/delete`,
        method: 'DELETE',
        dataType: 'json',
        success: (res)=>{
            if(res.ok == 1)
                $(`#${id}`).remove();
        },
        error: (err)=>{
            console.error(err);
        }
    });
}