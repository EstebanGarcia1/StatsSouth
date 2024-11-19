// Estado inicial
const state = {
    playerName: "DANO",
    teamName: "LOTUS KNIGTHS",
    teamLogo: "lotus.png",
    stats: {
        kd: "9-4",
        "1vsx": "0",
        "entry-kills": "+1",
        "pl-de": "0",
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

