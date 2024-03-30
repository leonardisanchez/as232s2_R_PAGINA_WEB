document.addEventListener("DOMContentLoaded", cargarFechas);

function cargarFechas() {
    obtenerFechas();
}

function mostrarFechasEnCalendario(fechas) {
    const calendario = document.getElementById("calendario");
    calendario.innerHTML = "";

    fechas.forEach((fecha) => {
        const fechaElemento = document.createElement("div");
        fechaElemento.innerHTML = `<strong>${fecha.fecha}</strong>: ${fecha.evento}`;
        calendario.appendChild(fechaElemento);
    });
}

function agregarFecha() {
    const fecha = document.getElementById("fecha").value;
    const evento = document.getElementById("evento").value;

    const data = new FormData();
    data.append("fecha", fecha);
    data.append("evento", evento);

    fetch("agregar_fecha.php", {
        method: "POST",
        body: data,
    })
    .then(response => response.json())
    .then(() => {
        obtenerFechas();
        // Limpiar el formulario
        document.getElementById("fecha").value = "";
        document.getElementById("evento").value = "";
    })
    .catch(error => console.error("Error al agregar fecha:", error));
}

function obtenerFechas() {
    fetch("obtener_fechas.php")
    .then(response => response.json())
    .then(fechas => mostrarFechasEnCalendario(fechas))
    .catch(error => console.error("Error al obtener fechas:", error));
}