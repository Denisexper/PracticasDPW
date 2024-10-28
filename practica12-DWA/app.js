// Variables de referencia a los elementos de HTML
const infoParrafo = document.getElementById("info");
const modificarBtn = document.getElementById("modificar-btn");
const guardarBtn = document.getElementById("guardar-btn");
const crearParrafobtn = document.getElementById("crear-parrafo-btn");
const crearBotonBtn = document.getElementById("crear-boton-btn");
const contenedor = document.getElementById("contenedor");

// Crear texto que va a almacenar al iniciar la página
window.onload = function () {
    const textoGuardado = localStorage.getItem("textoInfo");
    if (textoGuardado) {
        infoParrafo.textContent = textoGuardado;
    }

    const elementosGuardados = localStorage.getItem("contenedorHTML");
    if (elementosGuardados) {
        contenedor.innerHTML = elementosGuardados;
    }
};

// Función para modificar el texto
function modificarTexto() {
    const nuevoTexto = prompt("Introduce el nuevo texto");
    if (nuevoTexto) {
        infoParrafo.textContent = nuevoTexto;
        console.log("Texto modificado", infoParrafo.textContent);
    }
}

// Función para guardar los cambios en el localStorage
function guardarCambios() {
    localStorage.setItem("textoInfo", infoParrafo.textContent);
    localStorage.setItem("contenedorHTML", contenedor.innerHTML); // Guardar todo el HTML del contenedor
    alert("Cambios han sido guardados con éxito");
}

// Función para agregar un nuevo párrafo al contenedor
function agregarParrafo() {
    const nuevoParrafo = document.createElement("p");
    nuevoParrafo.textContent = "Este es un nuevo párrafo";
    contenedor.appendChild(nuevoParrafo);
    console.log("Párrafo añadido: ", nuevoParrafo);
}

// Función para crear y agregar un botón con evento al contenedor
function agregarbotonConEvento() {
    const nuevoBoton = document.createElement("button");
    nuevoBoton.textContent = "Botón Dinámico";

    // Evento del botón que muestra la alerta
    nuevoBoton.addEventListener("click", () => {
        alert("Has presionado el botón dinámico");
    });

    contenedor.appendChild(nuevoBoton);
    console.log("Botón añadido con eventos", nuevoBoton);
}

// Agregar eventos a los botones
modificarBtn.addEventListener("click", modificarTexto);
guardarBtn.addEventListener("click", guardarCambios);
crearParrafobtn.addEventListener("click", agregarParrafo);
crearBotonBtn.addEventListener("click", agregarbotonConEvento);


