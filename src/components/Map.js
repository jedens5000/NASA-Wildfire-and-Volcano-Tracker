import React from 'react'
 import GoogleMapReact from "google-map-react";
import LocationMarker from './LocationMarker';
const Map = ({ eventDate, center, zoom}) => {
  return (
    <div className="map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyBzeApc29RJV7EAA7raOaT4o2o7K9sL_kM' }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
        <LocationMarker lat={center.lat} lng={center.lng} />
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