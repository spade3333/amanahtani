import React from "react";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";

function MyMap() {
  // Load Google Maps script dengan API Key
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyDl80FQQLXT3IQIuBUubr0CsmsKa8d6y_U", // API Key kamu
  });

  if (!isLoaded) return <div>Loading Map...</div>; // tampilkan loading sementara map belum siap

  // Lokasi pusat map (misal Jakarta)
  const center = { lat: -6.2, lng: 106.816666 };

  return (
    <GoogleMap
      mapContainerStyle={{ width: "100%", height: "200px" }} // ukuran map
      center={center} // lokasi pusat
      zoom={12} // zoom level
    >
      <Marker position={center} /> {/* tanda lokasi */}
    </GoogleMap>
  );
}

export default MyMap;
