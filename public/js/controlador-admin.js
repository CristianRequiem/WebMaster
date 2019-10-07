// i18n Internationalisation plug-ins (Traducir idioma de tablas al español)
const spanish_language = {
    "sProcessing": "Procesando...",
    "sLengthMenu": "Mostrar _MENU_ registros",
    "sZeroRecords": "No se encontraron resultados",
    "sEmptyTable": "Ningún dato disponible en esta tabla",
    "sInfo": "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
    "sInfoEmpty": "Mostrando registros del 0 al 0 de un total de 0 registros",
    "sInfoFiltered": "(filtrado de un total de _MAX_ registros)",
    "sInfoPostFix": "",
    "sSearch": "Buscar:",
    "sUrl": "",
    "sInfoThousands": ",",
    "sLoadingRecords": "Cargando...",
    "oPaginate": {
        "sFirst": "Primero",
        "sLast": "Último",
        "sNext": "Siguiente",
        "sPrevious": "Anterior"
    },
    "oAria": {
        "sSortAscending": ": Activar para ordenar la columna de manera ascendente",
        "sSortDescending": ": Activar para ordenar la columna de manera descendente"
    }
}


// Cargar la página con DataTable JQuery
$(document).ready( function () {
    $('#users-table').DataTable({
        'language': spanish_language
    });

    $('#pages-table').DataTable({
        'language': spanish_language
    });

    $('#posts-table').DataTable({
        'language': spanish_language
    });
});

// Variables globales
let file_id = "";

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
    console.log("Contrasenia: " + persona.password)
    let parametros = `first_name=${persona.first_name}&last_name=${persona.last_name}&user_name=${persona.user_name}&email=${persona.email}&password="${persona.password}&user_type=${persona.user_type}`;
    $.ajax({
        url: '/admin/users/create',
        method: 'POST',
        data: parametros,
        dataType: 'json',
        success: (res)=>{
            if(res._id!=undefined)
                anexarFilaUsuario(res);
            document.getElementById('first_name').value = ""
            document.getElementById('last_name').value = ""
            document.getElementById('user_name').value = ""
            document.getElementById('email').value = ""
            document.getElementById('password').value = ""
            document.getElementById('user_type').value = 0
        },
        error: (error)=>{
            console.error(error);
        }
    });
}

// Anexar fila a la tabla de usuarios
function anexarFilaUsuario(res){
    document.getElementById('users-table').innerHTML +=
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

// Función para eliminar usuario
/*function eliminarUsuario(id){
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
}*/

// Función para eliminar usuario
function eliminarUsuario(id) {
    Swal.fire({
        title: 'Eliminar Usuario',
        text: '¿Ésta seguro que desea eliminar a este usuario?',
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        cancelButtonText: 'Cancelar',
        confirmButtonText: 'Eliminar'
    }).then((result) => {
        if (result.value) {
            const request = $.ajax({
                url: `/admin/users/${id}/delete`,
                method: 'DELETE',
                dataType: 'json',
                success: function (res) {
                    request.done(function () {
                        if (res.ok == 1) {
                            $(`#${id}`).remove();
                            Swal.fire(
                                '¡Eliminado!',
                                'El usuario ha sido eliminado.',
                                'success'
                            )
                        } else {
                            Swal.fire(
                                '¡Ups, algo salió mal!',
                                'error'
                            )
                        }
                    })
                },
                error: function (e) {
                    console.log(e)
                }
            })
        }
    })
}

// Función para obtener un archivo
function editarArchivo(id){
    file_id = id;
    $('#guardar').css('display', 'none');
    $('#actualizar').css('display', 'block');
    $('#file').css('display', 'none');
    $('#file_type').css('display', 'none');
    $.ajax({
        url: `/admin/files/${id}/get`,
        method: 'GET',
        dataType: 'json',
        success: function(res){
            document.getElementById('name').value = res.name;
            document.getElementById('description').value = res.description;
        },
        error: function(error){
            console.error(error);
        }
    })
}

// Función para actualizar un archivo
function actualizarArchivo(){
    let archivo = {
        name: document.getElementById('name').value,
        description: document.getElementById('description').value
    }
    let parametros = `name=${archivo.name}&description=${archivo.description}`;
    $.ajax({
        url: `/admin/files/${file_id}/update`,
        method: 'PUT',
        data: parametros,
        dataType: 'json',
        success: function(result){
            location.reload();
        },
        error: function(error){
            console.error(error)
        }
    })
}

// Función para eliminar archivos
function eliminarArchivo(id){
    Swal.fire({
        title: 'Eliminar Archivo',
        text: '¿Ésta seguro que desea eliminar este archivo?',
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        cancelButtonText: 'Cancelar',
        confirmButtonText: 'Eliminar'
    }).then((result) => {
        if (result.value) {
            const request = $.ajax({
                url: `/admin/files/${id}/delete`,
                method: 'DELETE',
                dataType: 'json',
                success: function (res) {
                    request.done(function () {
                        if (res.ok == 1) {
                            $(`#${id}`).remove();
                            Swal.fire(
                                '¡Eliminado!',
                                'El archivo ha sido eliminado.',
                                'success'
                            ).then(()=> location.reload())
                        } else {
                            Swal.fire(
                                '¡Ups, algo salió mal!',
                                'error'
                            )
                        }
                    })
                },
                error: function (e) {
                    console.log(e)
                }
            })
        }
    })
}

// Actualizar contenido de página principal
function guardarPagina(id){
    let pagina = {
        html: document.getElementById('tx-html').value,
        css: document.getElementById('tx-css').value,
        js: document.getElementById('tx-js').value
    }
    $.ajax({
        url: `/admin/${id}/save-page`,
        method: 'PUT',
        data: `html=${pagina.html}&css=${pagina.css}&js=${pagina.js}`,
        dataType: 'json',
        success: function(res){
            Swal.fire(
                'Actualización correcta',
                'La página se ha guardado correctamente',
                'success'
              )
        },
        error: function(error){
            Swal.fire(
                'ERROR',
                'Error al guardar la página',
                'error'
              )
        }
    });
}

// Función para crear páginas
function crearPagina(){
    let pagina = {
        title: document.getElementById('title').value,
        description: document.getElementById('description').value,
        active: document.getElementById('active').value,
        page_type: document.getElementById('page_type').value,
        url: '/' + document.getElementById('title').value
    }
    let parametros = `title=${pagina.title}&description=${pagina.description}&active=${pagina.active}&page_type=${pagina.page_type}&url=${pagina.url}`;
    $.ajax({
        url: '/admin/pages/create',
        method: 'POST',
        data: parametros,
        dataType: 'json',
        success: function(res){
            if(res._id!=undefined)
                anexarFilaPagina(res);
            document.getElementById('title').value = ""
            document.getElementById('description').value = ""
            document.getElementById('active').value = "true"
            document.getElementById('page_type').value = "estatica"
        },
        error: function(error){
            console.log(error);
        }
    })
}

function anexarFilaPagina(res){
    document.getElementById('pages-table').innerHTML +=
    `
    <tr id="${res._id}>
        <td>${res.title}</td>
        <td>${res.description}</td>
        <td>${res.page_type}</td>
        <td>${res.active?'Si':'No'}</td>
        <td><button class="btn btn-info" title="Ver" style="font-size:10px;"><span class="fas fa-eye"></span></button></td>
        <td><a href="/admin/pages/${res._id}/edit" class="btn btn-success" title="Editar" style="font-size:10px;"><span class="fas fa-edit"></span></a></td>
        <td><button class="btn btn-danger" title="Eliminar" style="font-size:10px;" onclick="eliminarPagina('${res._id}')"><span class="fas fa-trash-alt"></span></button></td>
    </tr>
    `
}

// Función para eliminar páginas
function eliminarPagina(id){
    Swal.fire({
        title: 'Eliminar Página',
        text: '¿Ésta seguro que desea eliminar esta página?',
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        cancelButtonText: 'Cancelar',
        confirmButtonText: 'Eliminar'
    }).then((result) => {
        if (result.value) {
            const request = $.ajax({
                url: `/admin/pages/${id}/delete`,
                method: 'DELETE',
                dataType: 'json',
                success: function (res) {
                    request.done(function () {
                        if (res.ok == 1) {
                            $(`#${id}`).remove();
                            Swal.fire(
                                '¡Eliminado!',
                                'La página ha sido eliminada.',
                                'success'
                            )
                        } else {
                            Swal.fire(
                                '¡Ups, algo salió mal!',
                                'error'
                            )
                        }
                    })
                },
                error: function (e) {
                    console.log(e)
                }
            })
        }
    })
}

// Funcion para editar pagina
function editarPagina(id){

}