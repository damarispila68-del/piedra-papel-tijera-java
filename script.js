// ===============================
// 🎮 PIEDRA PAPEL O TIJERA
// ===============================

// Marcadores
let playerScore = 0;
let computerScore = 0;

// Opciones del juego
const options = ["piedra", "papel", "tijera"];

// ===============================
// 🔥 FUNCIÓN PRINCIPAL DEL JUEGO
// ===============================
function play(playerChoice) {

    // CPU elige aleatorio
    const computerChoice = options[Math.floor(Math.random() * 3)];

    let result = "";

    // ===========================
    // 📌 LÓGICA DEL JUEGO
    // ===========================

    if (playerChoice === computerChoice) {
        result = "🤝 Empate";
    } 
    else if (
        (playerChoice === "piedra" && computerChoice === "tijera") ||
        (playerChoice === "papel" && computerChoice === "piedra") ||
        (playerChoice === "tijera" && computerChoice === "papel")
    ) {
        result = "🔥 Ganaste";
        playerScore++;
    } 
    else {
        result = "😢 Perdiste";
        computerScore++;
    }

    // ===========================
    // 🖥️ MOSTRAR EN PANTALLA
    // ===========================
    document.getElementById("result").textContent =
        `Tú: ${playerChoice} | CPU: ${computerChoice} → ${result}`;

    document.getElementById("playerScore").textContent = playerScore;
    document.getElementById("computerScore").textContent = computerScore;
}

// ===============================
// 🔄 REINICIAR JUEGO
// ===============================
function resetGame() {
    playerScore = 0;
    computerScore = 0;

    document.getElementById("playerScore").textContent = 0;
    document.getElementById("computerScore").textContent = 0;

    document.getElementById("result").textContent =
        "Elige una opción para comenzar";
}