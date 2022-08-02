import React from 'react'
 import GoogleMapReact from "google-map-react";
import LocationMarker from './LocationMarker';
const Map = ({ eventData, center, zoom}) => {
  const markers = eventData.map(ev => {
    if(ev.categories[0].id === 8) {
      return <LocationMarker lat={ev.geometries[0].coordinates[1]} lon={ev.geometries[0].coordinates[0]} />  
    }
    return null
    })

  return (
    <div className="map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyBzeApc29RJV7EAA7raOaT4o2o7K9sL_kM' }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
        {markers}
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