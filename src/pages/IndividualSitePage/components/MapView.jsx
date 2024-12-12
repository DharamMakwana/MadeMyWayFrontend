import React from "react"
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api"

export const MapContainer = ({ lat, lng }) => {
  return (
    <LoadScript googleMapsApiKey="AIzaSyAEoU0E6WuljqM1zlIaUke8gGa6ZMyC6pU">
      <GoogleMap
        mapContainerStyle={{ width: "100%", height: "400px" }}
        center={{
          lat: parseFloat(lat) || 37.7749,
          lng: parseFloat(lng) || -122.4194,
        }}
        zoom={25}
      >
        <Marker
          position={{
            lat: parseFloat(lat) || 37.7749,
            lng: parseFloat(lng) || -122.4194,
          }}
        />
      </GoogleMap>
    </LoadScript>
  )
}
