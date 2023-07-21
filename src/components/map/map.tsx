import React, { useRef } from 'react';
import { TOffers } from '../../types/offers.ts';
import useMap from '../../hooks/use-map.tsx';
import 'leaflet/dist/leaflet.css';
import leaflet from 'leaflet';
import { city } from '../../mocks/city.ts';
import { URL_MARKER_CURRENT, URL_MARKER_DEFAULT } from '../../constants/marker.ts';

type TMapProps = {
  offers: TOffers;
}

function Map({ offers }: TMapProps): React.JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  const defaultCustomIcon = leaflet.icon({
    iconUrl: URL_MARKER_DEFAULT,
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  const currentCustomIcon = leaflet.icon({
    iconUrl: URL_MARKER_CURRENT,
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  return (
    <div
      className="cities__map map"
      ref={mapRef}
    >
    </div>
  );
}

export default Map;
