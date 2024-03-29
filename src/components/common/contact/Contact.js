import React from "react"
import {APIProvider, Map, Marker} from '@vis.gl/react-google-maps';



const Contact = () => {
    let position = [{ lat: 10.791985627387465, lng: 106.70243558408973 }, { lat: 10.79472905213789, lng: 106.65244185340688 }]
    
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