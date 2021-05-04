let tutSteps = [
  "1. Inserisci la posizione del tetto da tracciare",
  "2. Traccia l'area sulla cartina. Per chiudere l'area bisogna cliccare sul primo pallino segnato.",
  "3. Cancella l'area disegnata se vuoi segnare un'altra",
];

// let ricerca = document.querySelector("input.mapboxgl-ctrl-geocoder--input");

// let disegna = document.querySelector(
//   "button.mapbox-gl-draw_ctrl-draw-btn.mapbox-gl-draw_polygon.active"
// );

// let cancella = document.querySelector(
//   "button.mapbox-gl-draw_ctrl-draw-btn.mapbox-gl-draw_trash"
// );

// let blockLeft = document.querySelector(".mapboxgl-ctrl-top-left");
let mappaEl = document.querySelector("#map");
let startBtn = document.createElement("div");
startBtn.className = "startBtn";
startBtn.innerHTML =
  '<button>Avvia il tutorial <img src="https://s2.svgbox.net/octicons.svg?ic=play&color=000" width="20" height="20"></button>';
mappaEl.appendChild(startBtn);
let avvia = document.querySelector(".startBtn button");

if (localStorage.getItem("closeTut") !== null) {
  if (localStorage.getItem("closeTut") === "true") {
    startBtn.style.display = "none";
  }
} else {
  localStorage.setItem("closeTut", "false");
  startBtn.style.display = "grid";
}

avvia.addEventListener("click", (e) => {
  e.preventDefault();
  startBtn.style.display = "none";
  localStorage.setItem("closeTut", "true");
});
