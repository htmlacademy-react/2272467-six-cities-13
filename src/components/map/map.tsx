import React, { useRef } from 'react';
import { TOffers } from '../../types/offers.ts';
import useMap from '../../hooks/use-map.tsx';
import 'leaflet/dist/leaflet.css';
import { city } from '../../mocks/city.ts';

type TMapProps = {
  offers: TOffers;
}

function Map({ offers }: TMapProps): React.JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  return (
    <div
      className="cities__map map"
      ref={mapRef}
    >
    </div>
  );
}

export default Map;
