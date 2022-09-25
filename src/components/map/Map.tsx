import { FC } from 'react';
import {
  Marker,
  Popup,
  TileLayer,
  ZoomControl,
  MapContainer,
} from 'react-leaflet';
import './Map.sass';

interface Props {}

const Map: FC<Props> = ({ children }) => {
  return (
    <div>
      <MapContainer
        center={[55.7887, 49.1221]}
        zoom={12}
        zoomControl={false}
        scrollWheelZoom={false}
        className="map_container"
      >
        <div className="parent">
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <Marker position={[55.7887, 49.1221]}>
            <Popup>Переработка</Popup>
          </Marker>
        </div>

        <div className="children">{children}</div>
        <ZoomControl />
      </MapContainer>
    </div>
  );
};

export default Map;
