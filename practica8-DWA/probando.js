/* Seleccionar el campo de entrada, el botón de agregar y la lista de tareas */
var nuevaTareainput = document.getElementById("nuevaTarea");
var agregarbtn = document.getElementById("agregarbtn");
var listaTarea = document.getElementById("listaTarea");

/* Agregar un evento al botón de agregar para escuchar el clic */
agregarbtn.addEventListener("click", function() {
    // Obtener el texto ingresado en el campo nueva tarea
    var textoTarea = nuevaTareainput.value;  // Cambiado "Value" a "value"

    if (textoTarea !== "") {
        var nuevaTarea = document.createElement("li");
        nuevaTarea.classList.add("tarea");

        var spanTexto = document.createElement("span");
        spanTexto.textContent = textoTarea;
        nuevaTarea.appendChild(spanTexto);

        var divBotones = document.createElement("div");

        var eliminarbtn = document.createElement("button");
        eliminarbtn.classList.add("eliminarBtn");
        eliminarbtn.textContent = "Eliminar";  // Cambiado "textContentm" a "textContent"

        eliminarbtn.addEventListener("click", function() {
            listaTarea.removeChild(nuevaTarea);
        });

        // Evento para modificar la tarea
        var modificarbtn = document.createElement("button");  // Añadido botón de modificar
        modificarbtn.classList.add("modificarBtn");
        modificarbtn.textContent = "Modificar";

        modificarbtn.addEventListener("click", function() {
            // Verificar si la tarea está en modo de edición
            if (modificarbtn.textContent === "Modificar") {
                modificarbtn.textContent = "Guardar";

                // Convertir el contenido de la tarea en un campo de texto editable
                var inputModificacion = document.createElement("input");
                inputModificacion.type = "text";
                inputModificacion.value = spanTexto.textContent;
                nuevaTarea.replaceChild(inputModificacion, spanTexto);

            } else {
                modificarbtn.textContent = "Modificar";

                // Recuperar el valor del campo de texto editable
                var nuevoTexto = nuevaTarea.firstChild.value;

                // Actualizar el texto del span
                spanTexto.textContent = nuevoTexto;

                // Reemplazar el campo de entrada por el nuevo texto
                nuevaTarea.replaceChild(spanTexto, nuevaTarea.firstChild);
            }
        });

        // Añadir los botones al div de botones
        divBotones.appendChild(modificarbtn);
        divBotones.appendChild(eliminarbtn);

        // Añadir el div de botones a la tarea
        nuevaTarea.appendChild(divBotones);  // Cambiado "appendChilds" a "appendChild"

        // Añadir la nueva tarea a la lista de tareas
        listaTarea.appendChild(nuevaTarea);

        // Limpiar el campo de entrada
        nuevaTareainput.value = "";

    } else {
        // Si el campo está vacío, mostrar una alerta
        alert("Por favor, ingresa una tarea");
    }
});
