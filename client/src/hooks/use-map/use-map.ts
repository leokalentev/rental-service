import { useRef, useEffect } from 'react';
import L, { Map as LeafletMap, tileLayer } from 'leaflet';
import { CityOffer } from '../../types/offer';

function useMap( mapRef: React.RefObject<HTMLDivElement | null>, city: CityOffer): LeafletMap | null {

  const mapInstance = useRef<LeafletMap | null>(null);

  useEffect(() => {
    if (mapRef.current && !mapInstance.current) {
      const { latitude, longitude, zoom } = city.location;

      mapInstance.current = L.map(mapRef.current, {
        center: [latitude, longitude],
        zoom,
        zoomControl: false,
        scrollWheelZoom: false,
      });

      tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors',
      }).addTo(mapInstance.current);
    }
  }, [mapRef, city]);

  useEffect(() => {
    if (mapInstance.current) {
      const { latitude, longitude, zoom } = city.location;
      mapInstance.current.setView([latitude, longitude], zoom);
    }
  }, [city]);

  return mapInstance.current;
}
export default useMap;
