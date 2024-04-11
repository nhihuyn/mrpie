import React from "react";
import { APIProvider, Map, Marker } from "@vis.gl/react-google-maps";

const MapStore: React.FC = () => {
  let position = [
    { lat: 10.766423, lng: 106.689673 },
    { lat: 10.756822, lng: 106.700687 },
    { lat: 10.781323, lng: 106.703557 },
    { lat: 10.772048, lng: 106.702441 },
    { lat: 10.764917, lng: 106.705336 },
  ];

  return (
    <APIProvider apiKey={process.env.REACT_APP_API_GG_MAP}>
      <Map
        defaultCenter={{ lat: 10.764917, lng: 106.705336 }}
        defaultZoom={15}
        gestureHandling={"greedy"}
        disableDefaultUI={true}
      >
        {position.map((e) => (
          <Marker position={{ lat: e.lat, lng: e.lng }} key={e.lat} />
        ))}
      </Map>
    </APIProvider>
  );
};

export default MapStore;
