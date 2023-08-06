import leaflet from 'leaflet';

const URL_MARKER_DEFAULT = 'public/img/pin.svg';

const URL_MARKER_CURRENT = 'public/img/pin-active.svg';


export const defaultCustomIcon = leaflet.icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

export const currentCustomIcon = leaflet.icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});