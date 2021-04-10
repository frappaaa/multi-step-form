mapboxgl.accessToken =
  "pk.eyJ1IjoiZnJhbmNlc2NvbHVwcGkiLCJhIjoiY2s0NWo0ejB1MDk5cDNncW9xcmUwb2ZzciJ9.RjXp_UnISsKM1WfxdAqB-A";
var map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/mapbox/streets-v11",
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

function updateArea(e) {
  var data = draw.getAll();
  var answer = document.getElementById("calculated-area");
  if (data.features.length > 0) {
    var area = turf.area(data);
    // restrict to area to 2 decimal points
    var rounded_area = Math.round(area * 100) / 100;
    answer.innerHTML =
      "<p><strong>" + rounded_area + "</strong></p><p>m<sup>2</sup></p>";
  } else {
    answer.innerHTML = "";
    if (e.type !== "draw.delete")
      alert("Usa gli strumenti qui accanto per disegnare l'area");
  }
}
