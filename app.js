console.log("app.js se está ejecutando correctamente.");
document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM completamente cargado y procesado.");

    let inputNombre = document.getElementById("nombre"); // ID corregido
    let botonAgregar = document.getElementById("agregar");
    let botonSortear = document.getElementById("sortear");
    let botonReiniciar = document.getElementById("reiniciar"); // Corregido center boton
    let lista = document.getElementById("lista");
    let parejasLista = document.getElementById("parejas");
    let listaAmigos = [];

    // Agregar nombres a la lista
    botonAgregar.addEventListener("click", () => {
        let nombre = inputNombre.value.trim();
        if (nombre && !listaAmigos.includes(nombre)) {
            listaAmigos.push(nombre);
            let li = document.createElement("li");
            li.textContent = nombre;
            lista.appendChild(li);
            inputNombre.value = "";
            botonSortear.disabled = listaAmigos.length < 2; // Habilita el sorteo si hay al menos 2 nombres
        }
    });

    // Sorteo del Amigo Secreto
    botonSortear.addEventListener("click", () => {
        if (listaAmigos.length < 2) return;

        // Mezcla los nombres aleatoriamente
        let mezclados = [...listaAmigos].sort(() => Math.random() - 0.5);
        parejasLista.innerHTML = "";

        for (let i = 0; i < mezclados.length; i++) {
            let amigoSecreto = i === mezclados.length - 1 ? mezclados[0] : mezclados[i + 1];
            let li = document.createElement("li");
            li.textContent = `${mezclados[i]} → ${amigoSecreto}`;
            parejasLista.appendChild(li);
        }

        document.getElementById("game").classList.add("hidden");
        document.getElementById("resultado").classList.remove("hidden");
    });

    // Reiniciar el juego
    botonReiniciar.addEventListener("click", () => {
        listaAmigos = [];
        lista.innerHTML = "";
        parejasLista.innerHTML = "";
        document.getElementById("game").classList.remove("hidden");
        document.getElementById("resultado").classList.add("hidden");
        botonSortear.disabled = true;
    });
});
