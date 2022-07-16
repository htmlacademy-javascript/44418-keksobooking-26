import {addPoints, markerGroup} from './map.js';
import {filter} from './form.js';

const filterType = function(item) {
  const typeElement = filter.querySelector('#housing-type');
  return typeElement.value === item.offer.type || typeElement.value === 'any';
};

const filterPrice = function(item) {
  const priceElement = filter.querySelector('#housing-price');
  if(priceElement.value === 'any') {
    return item.offer.price;
  }
  if(priceElement.value === 'middle') {
    return item.offer.price >= 10000 && item.offer.price <= 50000;
  }
  if(priceElement.value === 'low') {
    return item.offer.price < 10000;
  }
  if(priceElement.value === 'high') {
    return item.offer.price > 50000;
  }

  return false;
};

const filterRooms = function(item) {
  const roomsElement = filter.querySelector('#housing-rooms');
  return Number(roomsElement.value) === Number(item.offer.rooms) || roomsElement.value === 'any';
};

const filterQuests = function(item) {
  const guestsElement = filter.querySelector('#housing-guests');
  return Number(guestsElement.value) === Number(item.offer.guests) || guestsElement.value === 'any';
};

const filterWifi = function(item) {
  const wifiElement = filter.querySelector('#filter-wifi');
  if(item.offer.features && wifiElement.checked) {
    return item.offer.features.includes(wifiElement.value);
  } else if(!wifiElement.checked) {
    return true;
  }

  return false;
};

const filterDishwasher = function(item) {
  const dishwasherElement = filter.querySelector('#filter-dishwasher');
  if(item.offer.features && dishwasherElement.checked) {
    return item.offer.features.includes(dishwasherElement.value);
  } else if(!dishwasherElement.checked) {
    return true;
  }

  return false;
};

const filterParking = function(item) {
  const parkingElement = filter.querySelector('#filter-parking');
  if(item.offer.features && parkingElement.checked) {
    return item.offer.features.includes(parkingElement.value);
  } else if(!parkingElement.checked) {
    return true;
  }

  return false;
};

const filterWasher = function(item) {
  const washerElement = filter.querySelector('#filter-washer');
  if(item.offer.features && washerElement.checked) {
    return item.offer.features.includes(washerElement.value);
  } else if(!washerElement.checked) {
    return true;
  }

  return false;
};

const filterElevator = function(item) {
  const elevatorElement = filter.querySelector('#filter-elevator');
  if(item.offer.features && elevatorElement.checked) {
    return item.offer.features.includes(elevatorElement.value);
  } else if(!elevatorElement.checked) {
    return true;
  }

  return false;
};

const filterConditioner = function(item) {
  const conditionerElement = filter.querySelector('#filter-conditioner');
  if(item.offer.features && conditionerElement.checked) {
    return item.offer.features.includes(conditionerElement.value);
  } else if(!conditionerElement.checked) {
    return true;
  }

  return false;
};

const filterMap = function(data) {
  markerGroup.clearLayers();

  const filtered = data
    .filter(filterType)
    .filter(filterPrice)
    .filter(filterRooms)
    .filter(filterQuests)
    .filter(filterWifi)
    .filter(filterDishwasher)
    .filter(filterParking)
    .filter(filterWasher)
    .filter(filterElevator)
    .filter(filterConditioner);

  addPoints(filtered);
};


export {filterMap};
