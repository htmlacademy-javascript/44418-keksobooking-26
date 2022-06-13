import { dataAds } from './data.js';

const getAuthorAvatar= function(card, avatar) {
  const elm = card.querySelector('.popup__avatar');
  if(avatar) {
    elm.src = avatar;
    return elm;
  }
  elm.hidden = true;
  return elm;
};

const getOfferTitle = function(card, title) {
  const elm = card.querySelector('.popup__title');
  if(title) {
    elm.textContent = title;
    return elm;
  }
  elm.hidden = true;
  return elm;
};

const getOfferAddress = function(card, address) {
  const elm = card.querySelector('.popup__text--address');
  if(address) {
    elm.textContent = address;
    return elm;
  }
  elm.hidden = true;
  return elm;
};

const getOfferPrice = function(card, price) {
  const elm = card.querySelector('.popup__text--price');
  if(price) {
    elm.textContent = `${price}  ₽/ночь`;
    return elm;
  }
  elm.hidden = true;
  return elm;
};

const getOfferCapacity= function(card, capacity) {
  const elm = card.querySelector('.popup__text--capacity');
  const rooms = capacity[0];
  const guests = capacity[1];
  if(rooms && guests) {
    elm.textContent = `${rooms} комнаты для ${guests} гостей`;
    return elm;
  }
  elm.hidden = true;
  return elm;
};

const getOfferTime= function(card, time) {
  const elm = card.querySelector('.popup__text--time');
  const checkin = time[0];
  const checkout = time[1];
  if(checkin && checkout) {
    elm.textContent = `Заезд после ${checkin}, выезд до ${checkout}`;
    return elm;
  }
  elm.hidden = true;
  return elm;
};

const getOfferDescription = function(card, description) {
  const elm = card.querySelector('.popup__description');
  if(description) {
    elm.textContent = description;
    return elm;
  }
  elm.hidden = true;
  return elm;
};

const getOfferType = function(card, type) {
  const elm = card.querySelector('.popup__type');
  switch(type) {
    case 'flat':
      elm.textContent = 'Квартира';
      return elm;
    case 'bungalow':
      elm.textContent = 'Бунгало';
      return elm;
    case 'house':
      elm.textContent = 'Дом';
      return elm;
    case 'palace':
      elm.textContent = 'Дворец';
      return elm;
    case 'hotel':
      elm.textContent = 'Отель';
      return elm;
    default:
      elm.hidden = true;
      return elm;
  }
};

const getOfferFeatures = function(card, features) {
  const elm = card.querySelector('.popup__features');
  elm.textContent = '';
  if(features.length > 0) {
    features.forEach((element) => {
      const item = document.createElement('li');
      item.classList.add('popup__feature');
      item.classList.add(`popup__feature--${element}`);
      elm.append(item);
    });
    return elm;
  }
  elm.hidden = true;
  return elm;
};

const getOfferPhotos = function(card, photos) {
  const elm = card.querySelector('.popup__photos');
  elm.textContent = '';
  if(photos.length > 0) {
    photos.forEach((element) => {
      const photo = document.createElement('img');
      photo.classList.add('popup__photo');
      photo.width = 45;
      photo.height = 40;
      photo.alt = 'Фотография жилья';
      photo.src = element;
      elm.append(photo);
    });
    return elm;
  }
  elm.hidden = true;
  return elm;
};

const renderPopup = function(data) {
  const mapCanvas = document.querySelector('#map-canvas');
  const cardTemplate = document.querySelector('#card').content.querySelector('.popup');
  const cards = [];

  data.forEach(({author, offer}) => {
    const card = cardTemplate.cloneNode(true);
    const {avatar} = author;
    const {title, address, price, rooms, guests, checkin, checkout, type, description, features, photos} = offer;

    getAuthorAvatar(card, avatar);
    getOfferTitle(card, title);
    getOfferAddress(card, address);
    getOfferPrice(card, price);
    getOfferCapacity(card, [rooms, guests]);
    getOfferTime(card, [checkin, checkout]);
    getOfferDescription(card, description);
    getOfferType(card, type);
    getOfferFeatures(card, features);
    getOfferPhotos(card, photos);

    cards.push(card);
  });

  mapCanvas.append(cards[7]);
};

renderPopup(dataAds());
