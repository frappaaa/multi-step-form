let tutSteps = [
  "1. Inserisci la posizione del tetto da tracciare",
  "2. Traccia l'area sulla cartina. Per chiudere l'area bisogna cliccare sul primo pallino segnato.",
  "3. Cancella l'area tracciata",
];

let ricerca = document.querySelector(".mapboxgl-ctrl-geocoder.mapboxgl-ctrl");

let disegna = document.querySelector(
  "button.mapbox-gl-draw_ctrl-draw-btn.mapbox-gl-draw_polygon.active"
);

let cancella = document.querySelector(
  "button.mapbox-gl-draw_ctrl-draw-btn.mapbox-gl-draw_trash"
);

let tooltip = document.createElement("div");
tooltip.classList.add("tooltip-tut");

// let blockLeft = document.querySelector(".mapboxgl-ctrl-top-left");
let mappaEl = document.querySelector("#map");
let startBtn = document.createElement("div");
startBtn.className = "startBtn";
startBtn.innerHTML =
  '<button class="play">Avvia il tutorial <img src="https://s2.svgbox.net/octicons.svg?ic=play&color=000" width="20" height="20"></button><button class="close">Prosegui senza <img src="https://s2.svgbox.net/materialui.svg?ic=close&color=000" width="20" height="20"></button> ';
mappaEl.appendChild(startBtn);
let avvia = document.querySelector(".startBtn button.play");
let escTut = document.querySelector(".startBtn button.close");

if (localStorage.getItem("closeTut") !== null) {
  if (localStorage.getItem("closeTut") === "true") {
    startBtn.style.display = "none";
  }
} else {
  localStorage.setItem("closeTut", "false");
  startBtn.style.display = "grid";
}

/*AVVIA Tutorial */
avvia.addEventListener("click", (e) => {
  e.preventDefault();
  startBtn.style.display = "none";
  localStorage.setItem("closeTut", "true");
  setTimeout(() => {
    tooltip.textContent = tutSteps[0];
    ricerca.appendChild(tooltip);
    ricerca.classList.add("bordoTut");
  }, 0);
  setTimeout(() => {
    ricerca.classList.remove("bordoTut");
    tooltip.textContent = tutSteps[1];
    disegna.appendChild(tooltip);
    disegna.classList.add("bordoTut");
  }, 6000);
  setTimeout(() => {
    disegna.classList.remove("bordoTut");
    tooltip.textContent = tutSteps[2];
    cancella.appendChild(tooltip);
    cancella.classList.add("bordoTut");
  }, 10000);
  setTimeout(() => {
    cancella.removeChild(tooltip);
    cancella.classList.remove("bordoTut");
  }, 13000);
});

escTut.addEventListener("click", (e) => {
  e.preventDefault();
  startBtn.style.display = "none";
  localStorage.setItem("closeTut", "true");
});
