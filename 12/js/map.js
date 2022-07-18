import {doActiveForm, doInactiveForm, form} from './form.js';
import {createPopup } from './popup.js';

doInactiveForm();

const map = L.map('map-canvas')
  .on('load', () => {
    doActiveForm();
  })
  .setView({
    lat: 35.68952,
    lng: 139.69199,
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


const mainPinMarker = L.marker(
  {
    lat: 35.68952,
    lng: 139.69199,
  },
  {
    draggable: true,
    icon: mainPinIcon,
  },
);


mainPinMarker.on('moveend', (evt) => {
  const {lat, lng} = evt.target.getLatLng();
  form.querySelector('#address').value = `${lat.toFixed(5)}, ${lng.toFixed(5)}`;
});


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
  data.slice(0, 10).forEach((point) => {
    createMarker(point);
  });
  mainPinMarker.addTo(markerGroup);
};


export {addPoints, mainPinMarker, markerGroup};
