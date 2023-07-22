import React, { useEffect, useRef } from 'react';
import { TCity, TOffer, TOffers } from '../../types/offers.ts';
import useMap from '../../hooks/use-map.tsx';
import 'leaflet/dist/leaflet.css';
import leaflet, { Marker, layerGroup } from 'leaflet';
import { URL_MARKER_CURRENT, URL_MARKER_DEFAULT } from '../../constants/marker.ts';

type TMapProps = {
  offers: TOffers;
  city: TCity;
  selectedOffer: Pick<TOffer, 'id'> | undefined;
}

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

function Map({ offers, city, selectedOffer }: TMapProps): React.JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      const markerLayer = layerGroup().addTo(map);
      offers.forEach(({ location, ...offer }) => {
        const marker = new Marker({
          lat: location.latitude,
          lng: location.longitude
        });

        marker
          .setIcon(
            selectedOffer !== undefined && offer.id === selectedOffer.id
              ? currentCustomIcon
              : defaultCustomIcon
          )
          .addTo(markerLayer);
      });

      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [map, offers, selectedOffer]);

  return (
    <div
      className="cities__map map"
      ref={mapRef}
    >
    </div>
  );
}

export default Map;
