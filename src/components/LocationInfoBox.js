import React from 'react'

const LocationInfoBox = ({ info }) => {
  return (
    <div className="location-info">
      <h2>Event Location Info</h2>
      <ul>
        <li>TITLE: <strong>{ info.title }</strong></li>
        <li>DATE: <strong>{ info.date.slice(0, 10) }</strong></li>
        <li>ID: <strong>{ info.id }</strong></li>
      </ul>
    </div>
  )
}

export default LocationInfoBox