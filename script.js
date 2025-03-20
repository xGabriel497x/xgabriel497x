document.getElementById("popupBtn").addEventListener("click", function() {
    document.getElementById("popup").classList.remove("hidden");
});

function closePopup() {
    document.getElementById("popup").classList.add("hidden");
}

let step = 0; // Controla la parte actual de la historia

function nextPart() {
    let storyText = document.getElementById("storyText");
    let button = document.getElementById("storyButton");

    let storyParts = [
        "Asti vio algo brillar entre las flores… Era un Bon o Bon dorado! Decidió acercarse, pero justo en ese momento, una brisa llenó el aire con el aroma de mangos frescos.",
        "Al levantar el Bon o Bon, notó una nota pegada a él. ‘Si sigues el camino de los pétalos, encontrarás algo especial’, decía. Intrigada, siguió las flores amarillas hasta que...",
        "Al final del sendero, encontró una mesa llena de fresas, chocolates y una crepa esperándola. Y justo ahí, bajo un cielo lleno de estrellas, aparecí yo con un ramo de peonías y una sonrisa de las que te gustan.",
        "Nos miramos por un momento, sabiendo que este era solo el comienzo de muchas más historias juntos. ‘Mi Asti, esto es solo el comienzo de todas las cosas que quiero compartir contigo’, le dije.",
        "Nos miramos por un momento, sabiendo que este era solo el comienzo de muchas más historias juntos. 💛",
        "Y con miradas las cuales podían atravesar nuestras almas nos dimos cuenta que este era el comienzo de algo que no tenía fin. 💕",
        "Fin ❤️"
    ];

    if (step < storyParts.length) {
        storyText.innerHTML = storyParts[step];
        step++;
    }
    
    if (step === storyParts.length) {
        button.style.display = "none"; // Oculta el botón
        startSunflowerRain(); // Lanza los girasoles
    }
}

function countdown() {
    let targetDate = new Date("October 1, 2025 00:00:00").getTime();
    let now = new Date().getTime();
    let difference = targetDate - now;

    let days = Math.floor(difference / (1000 * 60 * 60 * 24));
    document.getElementById("timeLeft").innerText = `Faltan ${days} días para verte.`;
}
setInterval(countdown, 1000);

// 🌟 Efecto de estrellas en el fondo
const canvas = document.getElementById("starCanvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function drawStar(x, y) {
    ctx.fillStyle = "yellow";
    ctx.beginPath();
    ctx.arc(x, y, 2, 0, Math.PI * 2);
    ctx.fill();
}

function animateStars() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < 5; i++) {
        drawStar(Math.random() * canvas.width, Math.random() * canvas.height);
    }
    requestAnimationFrame(animateStars);
}
animateStars();

// 🌻 Efecto de lluvia de girasoles
function startSunflowerRain() {
    for (let i = 0; i < 60; i++) {
        setTimeout(createSunflower, i * 150);
    }
}

function createSunflower() {
    let sunflower = document.createElement("div");
    sunflower.innerHTML = "🌻";
    sunflower.style.position = "fixed";
    sunflower.style.left = Math.random() * window.innerWidth + "px";
    sunflower.style.top = "-50px";
    sunflower.style.fontSize = "30px";
    sunflower.style.opacity = "0.9";
    sunflower.style.transition = "transform 4s linear, opacity 4s ease-out";
    document.body.appendChild(sunflower);

    setTimeout(() => {
        sunflower.style.transform = `translateY(${window.innerHeight + 50}px) rotate(${Math.random() * 360}deg)`;
        sunflower.style.opacity = "0";
    }, 100);

    setTimeout(() => {
        sunflower.remove();
    }, 4000);
}
