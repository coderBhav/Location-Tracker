import React from "react";
import { useState } from "react";
import Header from "./components/Header";
import LocationInfo from "./components/LocationInfo";
import MapView from "./components/MapView";
import '@fortawesome/fontawesome-free/css/all.min.css';

const App=()=> {
  const [location, setLocation] = useState({ lat: 0, lng: 0 });

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        (error) => {
          console.error(error);
          alert("Could not get location!");
        }
      );
    } else {
      alert("Geolocation not supported by your browser");
    }
  };

  return (
    <div className="app-container">
      <Header />
      <button onClick={getLocation} className="btn">
        Get My Location
      </button>
      {location.lat !== 0 && location.lng !== 0 && (
        <>
          <LocationInfo location={location} />
          <MapView location={location} />
        </>
      )}
    </div>
  );
};

export default App;