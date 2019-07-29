function generarArchivos(){
    document.getElementById('titulo').innerHTML = 'Archivos';
    document.getElementById('cuerpo').innerHTML =
    `
    <div class="col-6 mx-auto card card-body">
        <form action="">
            <div class="group-form">
                <label>Nombre de archivo: </label><input type="text" class="form-control">
            </div>
            <div class="group-form">
                <label>Descripción: </label><input type="text" class="form-control">
            </div>
            <div class="group-form">
                <label>Tipo de archivo: </label>
                <select name="tipo-archivo" id="tipo-archivo">
                    <option value="0">Seleccione un tipo</option>
                    <option value="img">Imagen</option>
                    <option value="video">Video</option>
                    <option value="gen">Genérico</option>
                </select>
                <input type="text" placeholder=".txt" disabled>
            </div>
            <button type="button" class="btn btn-primary form-control">Guardar</button>
        </form>
    </div>
    `
    ;
}