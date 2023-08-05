import React, { useEffect, useRef } from 'react';
import { TCity, TOffer } from '../../types/offers.ts';
import useMap from '../../hooks/use-map.tsx';
import 'leaflet/dist/leaflet.css';
import leaflet, { Marker, layerGroup } from 'leaflet';
import { URL_MARKER_CURRENT, URL_MARKER_DEFAULT } from '../../constants/marker.ts';
import cn from 'classnames';
import { City } from '../../constants/city.ts';

type TMapProps = {
  offers: TOffer[];
  selectedCity: City;
  selectedOffer: Pick<TOffer, 'id'> | undefined;
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

function getLocationCity(city: City): Pick<TCity, 'location'> {
  switch (city) {
    case City.Paris:
      return {
        location: {
          latitude: 48.8534,
          longitude: 2.3488,
          zoom: 10
        }
      };
    case City.Cologne:
      return {
        location: {
          latitude: 50.8936,
          longitude: 7.0731,
          zoom: 10
        }
      };
    case City.Brussels:
      return {
        location: {
          latitude: 50.846707,
          longitude: 4.352472,
          zoom: 10
        }
      };
    case City.Amsterdam:
      return {
        location: {
          latitude: 52.374,
          longitude: 4.88969,
          zoom: 10
        }
      };
    case City.Hamburg:
      return {
        location: {
          latitude: 53.5753,
          longitude: 10.0153,
          zoom: 10
        }
      };
    case City.Dusseldorf:
      return {
        location: {
          latitude: 51.2217,
          longitude: 6.77616,
          zoom: 10
        }
      };
  }
}


function Map({ offers, selectedCity, selectedOffer, page }: TMapProps): React.JSX.Element {
  const cityLocation = getLocationCity(selectedCity);
  const mapRef = useRef(null);
  const map = useMap(mapRef, cityLocation);

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

      map.setView({ lat: cityLocation.location.latitude, lng: cityLocation.location.longitude },
        cityLocation.location.zoom);

      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [map, offers, selectedOffer, cityLocation]);

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
