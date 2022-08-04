import React from "react";
import { useState } from "react";
import GoogleMapReact from "google-map-react";
import LocationMarker from "./LocationMarker";
import VolcanoMarker from "./VolcanoMarker";
import LocationInfoBox from "./LocationInfoBox";

const Map = ({ eventData, center, zoom }) => {
  console.log(eventData); // Full API source data

  const [locationInfo, setLocationInfo] = useState(null);

  const markers = eventData.map((ev) => {
    if (ev.categories[0].id === "wildfires") {
      return (
        <LocationMarker
          lat={ev.geometry[0].coordinates[1]}
          lng={ev.geometry[0].coordinates[0]}
          onClick={() =>
            setLocationInfo({
              id: ev.id,
              title: ev.title,
              date: ev.geometry[0].date,
            })
          }
        />
      );
    }

    if (ev.categories[0].id === "volcanoes") {
      return (
        <VolcanoMarker
          lat={ev.geometry[0].coordinates[1]}
          lng={ev.geometry[0].coordinates[0]}
          onClick={() =>
            setLocationInfo({
              id: ev.id,
              title: ev.title,
              date: ev.geometry[0].date,
            })
          }
        />
      );
    }
    return null;
  });
  const googleQui = process.env.REACT_APP_MAP_QUI;
  console.log(markers); // Filtered data only id= wildfires or volcanos
  return (
    <div className="map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: googleQui }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
        {markers}
      </GoogleMapReact>
      {locationInfo && <LocationInfoBox info={locationInfo} />}
    </div>
  );
};

Map.defaultProps = {
  center: {
    lat: 42.24568,
    lng: -122.78865,
  },
  zoom: 6,
};

export default Map;
