import { getRandomPositiveFloat, getRandomPositiveInteger } from './util.js';

const AVATAR = [1,2,3,4,5,6,7,8,9,1];
const TITLE = [
  'Заголовок 1',
  'Заголовок 2',
  'Заголовок 3',
  'Заголовок 4',
  'Заголовок 5',
  'Заголовок 6',
  'Заголовок 7',
  'Заголовок 8',
  'Заголовок 9',
  'Заголовок 10',
];
const PRICE = [1200, 2300, 2450, 850, 456, 7650, 2500, 3600, 5600, 3200];
const TYPE = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
const ROOMS = [1, 2, 3, 100];
const QUESTS = [0, 1, 2, 3];
const CHECKIN = ['12:00', '13:00', '14:00'];
const CHECKOUT = ['12:00', '13:00', '14:00'];
const FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const DESCRIPTION = ['Описание 1','Описание 2','Описание 3','Описание 4','Описание 5','Описание 6','Описание 7','Описание 8','Описание 9','Описание 10'];
const PHOTOS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'
];
const MIN_LAT = 35.65000;
const MAX_LAT = 35.70000;
const MIN_LNG = 139.70000;
const MAX_LNG = 139.80000;

const getRandomArrayElement = function(element) {
  return element[getRandomPositiveInteger(0, element.length - 1)];
};

const getAvatarId = function() {
  const id = getRandomArrayElement(AVATAR);
  if(id < 10) {
    return `0${id}`;
  }
  return id;
};

const createAd = function() {
  return {
    author: {
      avatar: `img/avatars/user${getAvatarId()}.png`
    },
    offer: {
      title: getRandomArrayElement(TITLE),
      address: `${getRandomPositiveFloat(MIN_LAT, MAX_LAT, 5)}, ${getRandomPositiveFloat(MIN_LNG, MAX_LNG, 5)}`,
      price: getRandomArrayElement(PRICE),
      type: getRandomArrayElement(TYPE),
      rooms: getRandomArrayElement(ROOMS),
      guests: getRandomArrayElement(QUESTS),
      checkin: getRandomArrayElement(CHECKIN),
      checkout: getRandomArrayElement(CHECKOUT),
      features: FEATURES.filter(() => Math.random() < 0.5),
      description: getRandomArrayElement(DESCRIPTION),
      photos: PHOTOS.filter(() => Math.random() < 0.5),
    },
    location: {
      lat: getRandomPositiveFloat(MIN_LAT, MAX_LAT, 5),
      lng: getRandomPositiveFloat(MIN_LNG, MAX_LNG, 5)
    }
  };
};

const data = function() {
  return Array.from({ length: 10 }, createAd);
};

export {data};
