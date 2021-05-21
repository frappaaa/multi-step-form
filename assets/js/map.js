mapboxgl.accessToken =
  "pk.eyJ1IjoiZnJhbmNlc2NvbHVwcGkiLCJhIjoiY2tuMzBhd3pyMTFxajJ1bHJxajV6bTdnZiJ9.dO_oLJys8zuPkTqbf5zTlA";

//Crea mappa con MapBox
var map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/francescoluppi/cknc1acrp149w17p3sct3v2s5",
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

map.on("load", function () {
  map.resize();
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
  // let coordinatesAll = "[";
  let mapsURL = "http://maps.google.com/maps?q=";
  let imageURL =
    "https://api.mapbox.com/styles/v1/francescoluppi/cknc1acrp149w17p3sct3v2s5/static/";
  for (
    let i = 0;
    i < data.features[0].geometry.coordinates[0].length - 1;
    i++
  ) {
    // coordinatesAll += "[";
    for (
      let j = 0;
      j < data.features[0].geometry.coordinates[0][i].length;
      j++
    ) {
      if (j != data.features[0].geometry.coordinates[0][i].length - 1) {
        // coordinatesAll += data.features[0].geometry.coordinates[0][i][j] + ",";
        imageURL += `pin-l+387be5(${data.features[0].geometry.coordinates[0][i][j]},`;
      } else {
        // coordinatesAll += data.features[0].geometry.coordinates[0][i][j];
        imageURL += `${data.features[0].geometry.coordinates[0][i][j]})`;
      }
    }
    if (i != data.features[0].geometry.coordinates[0].length - 2) {
      // coordinatesAll += "],";
      imageURL += ",";
      // } else coordinatesAll += "]";
    }
    // console.log(coordinatesAll + "]");
  }
  imageURL += "/auto/1000x900?padding=50&access_token=" + mapboxgl.accessToken;
  mapsURL +=
    data.features[0].geometry.coordinates[0][0][1] +
    "," +
    data.features[0].geometry.coordinates[0][0][0];
  let answer = document.getElementById("calculated-area");

  if (data.features.length > 0) {
    let area = turf.area(data);
    // restrict to area to 2 decimal points
    let rounded_area = Math.round(area * 100) / 100;
    answer.innerHTML =
      '<p><strong><input type="number" name="Area tetto in m2" class="text-center bg-transparent" value="' +
      rounded_area +
      '" /> m<sup>2</sup></strong></p><div class="hidden"><input type="text" name="Link immagine area" class="text-center bg-transparent" value="' +
      imageURL +
      '" /> </div><div class="hidden"><input type="text" name="Link prima coordinata" class="text-center bg-transparent" value="' +
      mapsURL +
      '" /> </div>';
  } else {
    answer.innerHTML += "";
    if (e.type !== "draw.delete")
      alert("Usa gli strumenti qui accanto per disegnare l'area");
  }
}

//Seleziona stile mappa
var layerList = document.getElementById("menu");
var inputs = layerList.getElementsByClassName("stile-mappa");

for (var i = 0; i < inputs.length; i++) {
  inputs[i].addEventListener("click", function (e) {
    map.setStyle("mapbox://styles/" + this.getAttribute("aria-style"));
  });
}
