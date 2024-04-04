import React, { useState, useEffect } from "react";
import { APIProvider, Map, Marker } from "@vis.gl/react-google-maps";
import axios from "axios";
import {
  setDefaults,
  fromAddress,
  // geocode,
} from "react-geocode";
const MapStore = ({ currentLocation, data }) => {
  let position = [
    { lat: 10.766423, lng: 106.689673 },
    { lat: 10.756822, lng: 106.700687 },
    { lat: 10.781323, lng: 106.703557 },
    { lat: 10.772048, lng: 106.702441 },
    { lat: 10.764917, lng: 106.705336 },
  ];
  const [storeCoords, setStoreCoords] = useState([]);
  const [coords, setCoords] = useState(null);
  const store = [
    {
      id: 1,
      name: "Tên chi nhánh 01",
      address:
        "135 Hai Bà Trưng, Bến Nghé, Quận 1, Thành phố Hồ Chí Minh , Vietnam",
    },
    {
      id: 2,
      name: "Tên chi nhánh 02",
      address:
        "Ruby Home 1, 92 Đ. Nguyễn Hữu Cảnh, Saigon Pearl, Bình Thạnh, Thành phố Hồ Chí Minh 70000, Vietnam",
    },
    {
      id: 4,
      name: "Tên chi nhánh 06",
      address:
        "603a Đ. Lũy Bán Bích, Hoà Thanh, Tân Phú, Thành phố Hồ Chí Minh, Vietnam",
    },
  ];
  setDefaults({
    key: process.env.REACT_APP_API_GG_MAP, // Your API key here.
    language: "en", // Default language for responses.
    region: "es", // Default region for responses.
  });

  let location =
    "Citisoho, Đường 35 CL, Cát Lái, Thành phố Thủ Đức, Thành phố Hồ Chí Minh, Việt Nam";
  fromAddress(location)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.error(error);
    });

  // useEffect(() => {}, []);
  // const calculateCoord = async () => {
  //   for (const storeItem of store) {
  //     console.log("first check");
  //     try {
  //       console.log("second check address", storeItem.address);
  //       fromAddress(storeItem.address)
  //         .then((response) => {
  //           console.log(response);
  //         })
  //         .catch((error) => {
  //           console.error(error);
  //         });
  //     } catch (error) {
  //       console.error("Error geocoding address:", error);
  //     }
  //   }
  // };
  // calculateCoord();

  useEffect(() => {
    console.log(coords);
    navigator.geolocation.getCurrentPosition((currentPosition) => {
      const { latitude, longitude } = currentPosition.coords;
      setCoords({ lat: latitude, lng: longitude });
    });
    console.log("current position", coords);
  }, []);

  const [result, setResult] = useState(null);

  // const calculateDistance = async () => {
  //   const origin = "120 W Randolph St, Chicago, IL 60602, USA";
  //   const destination = "204 S Clark St, Chicago, IL 60604, USA";
  //   const apiKey = process.env.REACT_APP_API_GG_MAP;
  //   const url = `https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=${origin}&destinations=${destination}&key=${apiKey}`;
  //   console.log("check");
  //   // fetch(url, {
  //   //   mode: "no-cors",
  //   //   method: "get",
  //   //   headers: {
  //   //     "Content-Type": "application/json",
  //   //   },
  //   //   body: JSON.stringify(),
  //   // });
  //   try {
  //     const response = await fetch(url, {
  //       method: "get",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     });
  //     console.log("check data 1");
  //     const data = await response.json();
  //     console.log("check data 2", data);

  //   } catch (error) {
  //     console.error(error);
  //   }
  // };
  // calculateDistance();

  return (
    <APIProvider apiKey={process.env.REACT_APP_API_GG_MAP}>
      <Map
        defaultCenter={coords}
        defaultZoom={15}
        gestureHandling={"greedy"}
        disableDefaultUI={true}
      >
        {position.map((e) => (
          <Marker position={{ lat: e.lat, lng: e.lng }} key={e.lat} />
        ))}

        {coords && <Marker position={{ lat: coords.lat, lng: coords.lng }} />}
      </Map>
    </APIProvider>
  );
};

export default MapStore;