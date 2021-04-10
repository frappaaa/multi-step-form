mapboxgl.accessToken =
  "pk.eyJ1IjoiZnJhbmNlc2NvbHVwcGkiLCJhIjoiY2tuMzBhd3pyMTFxajJ1bHJxajV6bTdnZiJ9.dO_oLJys8zuPkTqbf5zTlA";

//Crea mappa con MapBox
var map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/mapbox/satellite-v9",
  center: [12.489301137982158, 41.91097016686327],
  zoom: 4.5,
});

// Add zoom and rotation controls to the map.
map.addControl(new mapboxgl.NavigationControl());
var draw = new MapboxDraw({
  displayControlsDefault: false,
  controls: {
    polygon: true,
    trash: true,
  },
  defaultMode: "draw_polygon",
});

//Aggiungo controllo per la barra di ricerca dei luoghi
map.addControl(
  new MapboxGeocoder({
    accessToken: mapboxgl.accessToken,
    mapboxgl: mapboxgl,
  }),
  "top-left"
);

//Aggiunto il controllo per la posizione attuale dell'utente
map.addControl(
  new mapboxgl.GeolocateControl({
    positionOptions: {
      enableHighAccuracy: true,
    },
    trackUserLocation: true,
  })
);

//Aggiunto il controllo per disegnare
map.addControl(draw, "top-left");

map.on("draw.create", updateArea);
map.on("draw.delete", updateArea);
map.on("draw.update", updateArea);

//Funzione per il calcolo dell'area in base alle modifiche a schermos
function updateArea(e) {
  let data = draw.getAll();
  let answer = document.getElementById("calculated-area");

  if (data.features.length > 0) {
    let area = turf.area(data);
    // restrict to area to 2 decimal points
    let rounded_area = Math.round(area * 100) / 100;
    answer.innerHTML =
      '<p><strong><input type="number" name="Area tetto in m2" class="text-center bg-transparent" value="' +
      rounded_area +
      '" /> m<sup>2</sup></strong></p>';
  } else {
    answer.innerHTML += "";
    if (e.type !== "draw.delete")
      alert("Usa gli strumenti qui accanto per disegnare l'area");
  }
}

//Seleziona stile mappa
var layerList = document.getElementById("menu");
var inputs = layerList.getElementsByTagName("input");

function switchLayer(layer) {
  var layerId = layer.target.id;
  map.setStyle("mapbox://styles/mapbox/" + layerId);
}

for (var i = 0; i < inputs.length; i++) {
  inputs[i].onclick = switchLayer;
}
