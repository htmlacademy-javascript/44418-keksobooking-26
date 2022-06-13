import { data } from './data.js';

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
}

const getAuthorAvatar= function(card, avatar) {
  const elm = card.querySelector('.popup__avatar');
  if(avatar) {
    return elm.src = avatar;
  }
  return elm.hidden = true;
}

const getOfferTitle = function(card, title) {
  const elm = card.querySelector('.popup__title')
  if(title) {
    return elm.textContent = title
  }
  return elm.hidden = true
}

const getOfferAddress = function(card, address) {
  const elm = card.querySelector('.popup__text--address')
  if(address) {
    return elm.textContent = address
  }
  return elm.hidden = true
}

const getOfferPrice = function(card, price) {
  const elm = card.querySelector('.popup__text--price')
  if(price) {
    return elm.textContent = `${price}  ₽/ночь`
  }
  return elm.hidden = true
}

const getOfferCapacity= function(card, capacity) {
  const elm = card.querySelector('.popup__text--capacity');
  const rooms = capacity[0];
  const guests = capacity[1];
  if(rooms && guests) {
    return elm.textContent = `${rooms} комнаты для ${guests} гостей`;
  }
  return elm.hidden = true;
}

const getOfferTime= function(card, time) {
  const elm = card.querySelector('.popup__text--time');
  const checkin = time[0];
  const checkout = time[1];
  if(checkin && checkout) {
    return elm.textContent = `Заезд после ${checkin}, выезд до ${checkout}`;
  }
  return elm.hidden = true;
}

const getOfferDescription = function(card, description) {
  const elm = card.querySelector('.popup__description')
  if(description) {
    return elm.textContent = description
  }
  return elm.hidden = true
}

const getOfferType = function(card, type) {
  const elm = card.querySelector('.popup__type')
  switch(type) {
    case 'flat':
      return elm.textContent = 'Квартира';
    case 'bungalow':
      return elm.textContent = 'Бунгало';
    case 'house':
      return elm.textContent = 'Дом';
    case 'palace':
      return elm.textContent = 'Дворец';
    case 'hotel':
      return elm.textContent = 'Отель';
    default:
      return elm.hidden = true
  }
}

const getOfferFeatures = function(card, features) {
  const elm = card.querySelector('.popup__features');
  elm.textContent = ''
  if(features.length > 0) {
    features.forEach((element) => {
      const item = document.createElement('li');
      item.classList.add('popup__feature');
      item.classList.add(`popup__feature--${element}`);
      elm.append(item);
    });
    return elm;
  }
  return elm.hidden = true;
}

const getOfferPhotos = function(card, photos) {
  const elm = card.querySelector('.popup__photos');
  elm.textContent = ''
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
  return elm.hidden = true;
}

renderPopup(data());
