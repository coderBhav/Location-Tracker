import React from "react";

const LocationInfo=({ location })=> {
  const { lat, lng } = location;
  const shareLink = `https://www.google.com/maps?q=${lat},${lng}`;

  return (
    <div className="location-info">
      <p>
        <strong>Latitude:</strong> {lat.toFixed(5)} | <strong>Longitude:</strong>{" "}
        {lng.toFixed(5)}
      </p>
      <a href={shareLink} target="_blank" rel="noopener noreferrer" className="map-btn">
        Open in Google Maps
      </a>
    </div>
  );
}

export default LocationInfo;