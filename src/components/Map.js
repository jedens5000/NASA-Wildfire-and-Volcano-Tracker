import React from 'react'
import GoogleMapReact from "google-map-react";
import LocationMarker from './LocationMarker';
const Map = ({ eventData, center, zoom}) => {
  console.log(eventData);
  const markers = eventData.map(ev => {
    if(ev.categories[0].id === "wildfires") {
      // return <LocationMarker lat={ev.geometries[0].coordinates[1]} lon={ev.geometries[0].coordinates[0]} />  
      return <LocationMarker lat={ev.geometry[0].coordinates[1]} lng={ev.geometry[0].coordinates[0]} />  
    }
    return null
    }
    )
    console.log(markers);
  return (
    <div className="map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyBzeApc29RJV7EAA7raOaT4o2o7K9sL_kM' }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
        {markers}
        {/* <LocationMarker lat={center.lat} lon={center.lng} /> */}
      </GoogleMapReact>
    </div>
  )
}

Map.defaultProps = {
  center: {
    lat: 42.24568,
    lng: -122.78865
  },
  zoom: 6
}

export default Map;