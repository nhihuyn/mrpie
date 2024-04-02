import React, { useEffect, useState } from "react"
import {APIProvider, Map, Marker} from '@vis.gl/react-google-maps';
// import { geocode, RequestType } from "react-geocode";
import { fromAddress, setDefaults } from "react-geocode";
import axios from 'axios';

const Contact = () => {
    const [result, setResult] = useState();
    let position = [{ lat: 10.791985627387465, lng: 106.70243558408973 }, { lat: 10.79472905213789, lng: 106.65244185340688 }]
    
    useEffect(() => {
        // https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=YOUR_API_KEY

        // setDefaults({
        //     key: "AIzaSyBzgCwbpOIGFqSjUZOj_ziOGDImv6bl4B4", // Your API key here.
        //     language: "en", // Default language for responses.
        //     region: "es", // Default region for responses.
        //   });
          
        // let location = "Citisoho, Đường 35 CL, Cát Lái, Thành phố Thủ Đức, Thành phố Hồ Chí Minh, Việt Nam"
        // fromAddress(location)
        //   .then((response) => {
        //     console.log(response);
        //   })
        //   .catch((error) => {
        //     console.error(error);
        //   });
        calculateDistance()

        // let location = "Citisoho, Đường 35 CL, Cát Lái, Thành phố Thủ Đức, Thành phố Hồ Chí Minh, Việt Nam"
        // axios.get('https://maps.googleapis.com/maps/api/geocode/json',{
        //     params:{
        //     address: location,
        //     key: 'AIzaSyBzgCwbpOIGFqSjUZOj_ziOGDImv6bl4B4',
        //     libraries: "geometry"
        //   }
        // })
        // .then(function(response){
        //     console.log("response", response)
        // })

    }, [])

    const calculateDistance = async () => {
        // const origin = "120 W Randolph St, Chicago, IL 60602, USA";
        // const destination = "204 S Clark St, Chicago, IL 60604, USA";
        const origins = ["New York, NY", "Los Angeles, CA"];
        const destinations = ["San Francisco, CA", "Seattle, WA"];
        const apiKey = "AIzaSyBzgCwbpOIGFqSjUZOj_ziOGDImv6bl4B4";
        try {
            const response = await axios.get('https://maps.googleapis.com/maps/api/distancematrix/json', {
                params: {
                    key: apiKey,
                    origins: origins.join('|'),
                    destinations: destinations.join('|')
                }
            });
            console.log("response", response)
            // setDistanceData(response.data);
        } catch (error) {
            console.error("Error fetching distance matrix:", error);
        }
      };
    return (
        <APIProvider apiKey="AIzaSyBzgCwbpOIGFqSjUZOj_ziOGDImv6bl4B4">
            <Map
            style={{width: '100vw', height: '100vh'}}
            defaultCenter={{ lat: 10.791985627387465, lng: 106.70243558408973 }}
            defaultZoom={3}
            gestureHandling={'greedy'}
            disableDefaultUI={true}
            >
                {
                    position.map((item, key) => (
                        <div index={key} key={key}>
                            <Marker position={item} />
                        </div>
                        
                    ))
                }
            </Map>
        </APIProvider>
    )
}

export default Contact