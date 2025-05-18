// components/FreeMap.js
import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L, { LatLngExpression } from 'leaflet';
import Box from '@mui/material/Box';

// 修正預設 Marker icon 在 Next.js 中不顯示問題
delete (L.Icon.Default.prototype as any)._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.3/dist/images/marker-shadow.png',
});

export default function FreeMap() {
  const [position, setPosition] = useState<LatLngExpression>([24.9934099, 121.2969674]); // 預設台北

  useEffect(() => {
    if (typeof window !== 'undefined' && navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((pos) => {
        setPosition([pos.coords.latitude, pos.coords.longitude]);
      });
    }
  }, []);

  return (
    <Box
      sx={{
        '& .leaflet-control-attribution': {
          display: 'none !important',
        },
      }}
    >
      <MapContainer center={position} zoom={10} style={{ height: '200px', width: '200px' }}>
        <TileLayer
          attribution='&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>你的位置</Popup>
        </Marker>
      </MapContainer>
    </Box>
  );
}
