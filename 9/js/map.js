import { doActiveForm, doInactiveForm, form} from './form.js';
import { createPopup } from './popup.js';

doInactiveForm();

const map = L.map('map-canvas')
  .on('load', () => {
    doActiveForm();
  })
  .setView({
    lat: 35.6895,
    lng: 139.692,
  }, 12);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

const mainPinIcon = L.icon({
  iconUrl: './img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

const pinIcon = L.icon({
  iconUrl: './img/pin.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

const markerGroup = L.layerGroup().addTo(map);


const createMainMarker = function() {
  const marker = L.marker(
    {
      lat: 35.6895,
      lng: 139.692,
    },
    {
      draggable: true,
      icon: mainPinIcon,
    },
  );
  marker.addTo(markerGroup);

  marker.on('moveend', (evt) => {
    const {lat, lng} = evt.target.getLatLng();
    form.querySelector('#address').value = `${lat.toFixed(5)}, ${lng.toFixed(5)}`;
  });
};
createMainMarker();


const createMarker = function(point) {
  const {lat, lng} = point.location;

  const marker = L.marker({
    lat,
    lng,
  }, {
    pinIcon
  });

  marker.addTo(markerGroup).bindPopup(createPopup(point));
};


const addPoints = function(data) {
  data.forEach((point) => {
    createMarker(point);
  });
};

export { addPoints };
