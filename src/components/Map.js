import React, { useRef, useEffect } from "react";

//MapBox
import mapboxgl from "mapbox-gl";

//Draw
import MapboxDraw from "@mapbox/mapbox-gl-draw";
import "@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css";

//geocoder
import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder";
import "@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css";

mapboxgl.accessToken =
  "pk.eyJ1IjoiZnJhbmNlc2NvbHVwcGkiLCJhIjoiY2tuMzBhd3pyMTFxajJ1bHJxajV6bTdnZiJ9.dO_oLJys8zuPkTqbf5zTlA";

const Map = () => {
  const mapContainerRef = useRef(null);

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [12.489, 41.915],
      zoom: 4.5,
    });

    map.addControl(
      new mapboxgl.GeolocateControl({
        positionOptions: {
          enableHighAccuracy: true,
        },
        trackUserLocation: true,
      }),
      "top-right"
    );
    // Add navigation control (the +/- zoom buttons)
    map.addControl(new mapboxgl.NavigationControl(), "top-right");

    const Draw = new MapboxDraw();
    const Geocoder = new MapboxGeocoder({
      accessToken: mapboxgl.accessToken,
      mapboxgl: mapboxgl,
    });

    // Map#addControl takes an optional second argument to set the position of the control.
    // If no position is specified the control defaults to `top-right`. See the docs
    // for more details: https://docs.mapbox.com/mapbox-gl-js/api/#map#addcontrol

    map.addControl(Geocoder, "top-left");
    map.addControl(Draw, "top-left");

    // Clean up on unmount
    return () => map.remove();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div style={{ width: "100%", height: "400px" }} ref={mapContainerRef} />
  );
};

export default Map;
