import React, { useEffect, useRef } from 'react';
import { TCity, TOffer, TOffers } from '../../types/offers.ts';
import useMap from '../../hooks/use-map.tsx';
import 'leaflet/dist/leaflet.css';
import leaflet, { Marker, layerGroup } from 'leaflet';
import { URL_MARKER_CURRENT, URL_MARKER_DEFAULT } from '../../constants/marker.ts';
import cn from 'classnames';

type TMapProps = {
  offers: TOffers;
  selectedCity: Omit<TCity, 'id'>;
  selectedOffer: TOffer | undefined;
  page: 'main' | 'offer';
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

function Map({ offers, selectedCity, selectedOffer, page }: TMapProps): React.JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef, selectedCity);

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
  }, [map, offers, selectedOffer, selectedCity]);

  return (
    <div
      className={cn(
        'map',
        { 'cities__map': page === 'main' },
        { 'offer__map': page === 'offer' }
      )}
      ref={mapRef}
    >
    </div>
  );
}

export default Map;
