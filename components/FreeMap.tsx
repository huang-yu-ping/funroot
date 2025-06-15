import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import Box from '@mui/material/Box';

delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.3/dist/images/marker-shadow.png',
});

export default function FreeMap() {
  const [position] = useState<[number, number]>([24.9934099, 121.2969674]);

  return (
    <Box
      sx={{
        '& .leaflet-control-attribution': {
          display: 'none !important',
        },
      }}
    >
      <MapContainer center={position} zoom={10} style={{ height: '250px', width: '250px' }}>
        <TileLayer
          attribution='Map tiles by <a href="https://carto.com/">Carto</a>, under CC BY 3.0. Data by OpenStreetMap, under ODbL.'
          url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
          // attribution='Map tiles by <a href="http://stamen.com">Stamen Design</a>, under CC BY 3.0. Data by OpenStreetMap, under ODbL.'
          // url="https://stamen-tiles.a.ssl.fastly.net/toner/{z}/{x}/{y}.png"
          // attribution='Map tiles by <a href="https://carto.com/">Carto</a>, under CC BY 3.0. Data by OpenStreetMap, under ODbL.'
          // url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
          // attribution='Map data: © <a href="https://opentopomap.org">OpenTopoMap</a>'
          // attribution={`© <a href="https://carto.com/">CARTO</a>`}
          // url="https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>我們的位置</Popup>
        </Marker>
      </MapContainer>
    </Box>
  );
}
