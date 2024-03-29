import React, { useState } from "react";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  useJsApiLoader,
} from "@react-google-maps/api";

const Map: React.FC = () => {
  const [currentLocation, setCurrentLocation] = useState(null);
  const storeBranches = [
    {
      id: 1,
      address:
        "Ruby Home 1, 92 Đ. Nguyễn Hữu Cảnh, Saigon Pearl, Bình Thạnh, Thành phố Hồ Chí Minh 70000, Vietnam",
    },
    {
      id: 2,
      address:
        "135 Hai Bà Trưng, Bến Nghé, Quận 1, Thành phố Hồ Chí Minh 70000, Vietnam",
    },
    {
      id: 3,
      address:
        "07 Công trường Lam Sơn, Bến Nghé, Quận 1, Thành phố Hồ Chí Minh 710212, Vietnam",
    },
  ];

  // const handleSearch = () => {
  //   if (navigator.geolocation) {
  //     navigator.geolocation.getCurrentPosition(
  //       (position) => {
  //         setCurrentLocation({
  //           lat: position.coords.latitude,
  //           lng: position.coords.longitude,
  //         });
  //       },
  //       (error) => {
  //         console.error("Error getting current location:", error);
  //       }
  //     );
  //   } else {
  //     console.error("Geolocation is not supported by this browser.");
  //   }
  // };
  const containerStyle = {
    width: "400px",
    height: "400px",
  };

  const center = {
    lat: -3.745,
    lng: -38.523,
  };
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.REACT_APP_MAP_API,
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

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={10}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      {/* Child components, such as markers, info windows, etc. */}
      <></>
    </GoogleMap>
  ) : (
    <></>
  );
};
export default React.memo(Map);
