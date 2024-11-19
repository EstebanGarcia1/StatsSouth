// Estado inicial
const state = {
    playerName: "CIERVO",
    teamName: "KWAI KIWIS",
    teamLogo: ".png",
    stats: {
        kd: "10-7",
        "1vsx": "0",
        "entry-kills": "-1",
        "pl-de": "1",
    },
};

// Función para actualizar la pantalla
function updateStats() {
    // Actualizar nombre del jugador
    document.getElementById("player-name").textContent = state.playerName;

    // Actualizar información del equipo
    document.getElementById("team-name").textContent = state.teamName;
    document.getElementById("team-logo").src = state.teamLogo;

    // Actualizar estadísticas
    document.getElementById("kd").querySelector(".value").textContent = state.stats.kd;
    document.getElementById("1vsx").querySelector(".value").textContent = state.stats["1vsx"];
    document.getElementById("entry-kills").querySelector(".value").textContent = state.stats["entry-kills"];
    document.getElementById("pl-de").querySelector(".value").textContent = state.stats["pl-de"];
}

// Inicializar pantalla
updateStats();

