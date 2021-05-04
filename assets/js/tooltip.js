let ricerca = document.querySelector("input.mapboxgl-ctrl-geocoder--input");
ricerca.setAttribute("data-toggle", "tooltip");
ricerca.setAttribute("data-placement", "left");
ricerca.setAttribute(
  "title",
  "1. Inserisci la posizione del tetto da tracciare"
);

let disegna = document.querySelector(
  "button.mapbox-gl-draw_ctrl-draw-btn.mapbox-gl-draw_polygon.active"
);
disegna.setAttribute("data-toggle", "tooltip");
disegna.setAttribute("data-placement", "right");
disegna.setAttribute(
  "title",
  "2. Traccia l'area sulla cartina. Per chiudere l'area bisogna cliccare sul primo pallino segnato."
);

let cancella = document.querySelector(
  "button.mapbox-gl-draw_ctrl-draw-btn.mapbox-gl-draw_trash"
);
cancella.setAttribute("data-toggle", "tooltip");
cancella.setAttribute("data-placement", "right");
cancella.setAttribute(
  "title",
  "3. Cancella l'area disegnata se vuoi segnare un'altra"
);
