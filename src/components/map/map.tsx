import React, { useEffect, useRef } from 'react';
import { TCity, TOffer } from '../../types/offers.ts';
import useMap from '../../hooks/use-map.tsx';
import 'leaflet/dist/leaflet.css';
import { Marker, layerGroup } from 'leaflet';
import cn from 'classnames';
import { City } from '../../constants/city.ts';
import { currentCustomIcon, defaultCustomIcon } from '../../constants/map.ts';
import { useAppSelector } from '../../hooks';


type TMapProps = {
  offers: TOffer[];
  selectedCity: City;
  page: 'main' | 'offer';
}

const styleMap = {
  height: '100%',
  minHeight: '500px',
  width: '100%',
  maxWidth: '1144px',
  margin: '0 auto'
};

function getLocationCity(city: City): Pick<TCity, 'location'> {
  switch (city) {
    case City.Paris:
      return {
        location: {
          latitude: 48.85661,
          longitude: 2.351499,
          zoom: 13
        }
      };
    case City.Cologne:
      return {
        location: {
          latitude: 50.938361,
          longitude: 6.959974,
          zoom: 13
        }
      };
    case City.Brussels:
      return {
        location: {
          latitude: 50.846557,
          longitude: 4.351697,
          zoom: 13
        }
      };
    case City.Amsterdam:
      return {
        location: {
          latitude: 52.37454,
          longitude: 4.897976,
          zoom: 13
        }
      };
    case City.Hamburg:
      return {
        location: {
          latitude: 53.550341,
          longitude: 10.000654,
          zoom: 13
        }
      };
    case City.Dusseldorf:
      return {
        location: {
          latitude: 51.225402,
          longitude: 6.776314,
          zoom: 13
        }
      };
  }
}


function Map({ offers, selectedCity, page }: TMapProps): React.JSX.Element {
  const cityLocation = getLocationCity(selectedCity);
  const mapRef = useRef(null);
  const map = useMap(mapRef, cityLocation);
  const selectedOffer = useAppSelector((state) => state.offers.selectedOffer);

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
            offer.id === selectedOffer
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
      style={page === 'offer' ? styleMap : {}}
    >
    </div>
  );
}

export default Map;
