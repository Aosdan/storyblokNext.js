"use client";
import { useMemo } from "react";
import { MapContainer, TileLayer, Marker as LMarker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

type Marker = {
  _uid: string;
  label?: string;
  lat: number;
  lng: number;
};

export default function LeafletMap({
  markers,
  centerLat,
  centerLng,
  zoom,
}: {
  markers: Marker[];
  centerLat: number;
  centerLng: number;
  zoom: number;
}) {
  const defaultIcon = useMemo(() => {
    return new L.Icon({
      iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
      iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
      shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowSize: [41, 41],
    });
  }, []);

  return (
    <MapContainer center={[centerLat, centerLng]} zoom={zoom} className="w-full h-[420px]">
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; OpenStreetMap contributors"
      />
      {markers.map((m) => (
        <LMarker key={m._uid} position={[m.lat, m.lng]} icon={defaultIcon}>
          <Popup>{m.label ?? "Stop"}</Popup>
        </LMarker>
      ))}
    </MapContainer>
  );
}


