document.getElementById("yes").addEventListener("click", function() {
    document.getElementById("message").classList.remove("hidden");
    createHearts();
});

document.getElementById("showMessage").addEventListener("click", function() {
    document.getElementById("popup").style.visibility = "visible";
    document.getElementById("popup").style.opacity = "1";
});

document.getElementById("closePopup").addEventListener("click", function() {
    document.getElementById("popup").style.visibility = "hidden";
    document.getElementById("popup").style.opacity = "0";
});

// Función para crear corazones flotantes con límite de cantidad en pantalla
function createHearts() {
    for (let i = 0; i < 50; i++) {
        let heart = document.createElement("div");
        heart.innerHTML = "💕";
        heart.classList.add("heart");
        document.getElementById("hearts").appendChild(heart);

        let size = Math.random() * 50 + 10;
        heart.style.fontSize = size + "px";

        let startX = Math.random() * 100;
        let startY = Math.random() * 100;
        heart.style.left = startX + "vw";
        heart.style.top = startY + "vh";

        heart.style.animationDuration = Math.random() * 2 + 2 + "s";

        setTimeout(() => {
            heart.remove();
        }, 3000);
    }
}

// Detecta si es un dispositivo móvil
const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

document.getElementById("no").addEventListener("mouseover", function (event) {
    if (!isMobile) { // Solo en PC
        moverBoton(event.target);
    }
});

document.getElementById("no").addEventListener("touchstart", function (event) {
    moverBoton(event.target);
});

// Función para mover el botón sin que salga de la pantalla
function moverBoton(button) {
    let maxX = window.innerWidth - button.offsetWidth - 20;
    let maxY = window.innerHeight - button.offsetHeight - 20;

    // Evita que el botón se salga de la pantalla
    let x = Math.max(10, Math.random() * maxX);
    let y = Math.max(10, Math.random() * maxY);

    button.style.position = "absolute";
    button.style.left = `${x}px`;
    button.style.top = `${y}px`;
}

// Función para escribir el mensaje letra por letra
function escribirMensaje(texto, elemento, velocidad = 50) {
    let i = 0;
    elemento.innerHTML = ""; // Vacía el contenido antes de empezar
    function escribir() {
        if (i < texto.length) {
            elemento.innerHTML += texto[i];
            i++;
            setTimeout(escribir, velocidad);
        }
    }
    escribir();
}

// Función para mostrar el mensaje final
function mostrarMensajeFinal() {
    const mensajeElemento = document.getElementById("mensaje-final");
    const mensaje = "Eres la persona más especial para mí ❤️";
    escribirMensaje(mensaje, mensajeElemento);

    // Asegura que el popup se muestre correctamente
    const popup = document.getElementById("popup");
    popup.style.visibility = "visible";
    popup.style.opacity = "1";
}

// Evento para mostrar el mensaje final con efecto de escritura
document.getElementById("mostrarMensajeBtn").addEventListener("click", mostrarMensajeFinal);

// Evento para cerrar el popup correctamente
document.getElementById("closePopup").addEventListener("click", function() {
    const popup = document.getElementById("popup");
    popup.style.visibility = "hidden";
    popup.style.opacity = "0";
});
