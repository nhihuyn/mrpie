import React from "react";
import {
  GoogleMap,
  MarkerF,
  useJsApiLoader,
} from "@react-google-maps/api";

import "./Map.css";

const containerStyle = {
  width: "100%",
  height: "100%",
};

const center = {
  lat: 10.8050719,
  lng: 106.7295974,
};

const position = {
  lat: 10.805065922763571,
  lng: 106.72940337570378,
};

const Map = () => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyBzgCwbpOIGFqSjUZOj_ziOGDImv6bl4B4",
  });

  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);
  console.log(map)

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={15}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      <MarkerF
        position={position}
        options={{ label: { text: "Mr.Pie", className: "map-marker " } }}
      />

      <></>
    </GoogleMap>
  ) : (
    <></>
  );
};

export default React.memo(Map);
