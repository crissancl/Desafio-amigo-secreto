// waiting doc
document.addEventListener("DOMContentLoaded", () => {
    // Capturamos los elementos principales del DOM
    const inputNombre = document.getElementById("nombre");
    const botonAgregar = document.getElementById("agregar");
    const botonSortear = document.getElementById("sortear");
    const botonReiniciar = document.getElementById("reiniciar");
    const mensajeSorteo = document.getElementById("mensaje-sorteo");
    const seccionJuego = document.getElementById("game");
    const seccionResultado = document.getElementById("resultado");

    let listaParticipantes = []; // Almacenamos los nombres de los participantes

    // Evento para agregar nombres a la lista
    botonAgregar.addEventListener("click", () => {
        let nombreIngresado = inputNombre.value.trim();

        if (nombreIngresado && !listaParticipantes.includes(nombreIngresado)) {
            listaParticipantes.push(nombreIngresado);
            inputNombre.value = ""; // Limpiar el campo después de agregar
            botonSortear.disabled = listaParticipantes.length < 2; // Activar el botón si hay al menos 2 nombres
            botonReiniciar.classList.remove("hidden"); // Mostrar botón de reinicio
        }
    });

    // Evento para realizar el sorteo del Amigo Secreto
    botonSortear.addEventListener("click", () => {
        if (listaParticipantes.length < 2) return;

        // Seleccionar aleatoriamente un Amigo Secreto de la lista
        let amigoSecreto = listaParticipantes[Math.floor(Math.random() * listaParticipantes.length)];
        mensajeSorteo.textContent = `Tu amigo secreto es: ${amigoSecreto}`;

        // Ocultar la sección de ingreso y mostrar el resultado
        seccionJuego.classList.add("hidden");
        seccionResultado.classList.remove("hidden");
    });

    // Evento para reiniciar el juego
    botonReiniciar.addEventListener("click", () => {
        listaParticipantes = []; // Vaciar la lista
        mensajeSorteo.textContent = ""; // Limpiar el mensaje
        seccionJuego.classList.remove("hidden");
        seccionResultado.classList.add("hidden");
        botonSortear.disabled = true; // Desactivar el botón hasta que haya al menos 2 nombres
        botonReiniciar.classList.add("hidden"); // Ocultar el botón de reinicio
    });
});
