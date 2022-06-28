const setAuthorAvatar= function(card, avatar) {
  const elm = card.querySelector('.popup__avatar');
  if(avatar) {
    elm.src = avatar;
  } else {
    elm.hidden = true;
  }
};

const setOfferTitle = function(card, title) {
  const elm = card.querySelector('.popup__title');
  if(title) {
    elm.textContent = title;
  } else {
    elm.hidden = true;
  }
};

const setOfferAddress = function(card, address) {
  const elm = card.querySelector('.popup__text--address');
  if(address) {
    elm.textContent = address;
  } else {
    elm.hidden = true;
  }
};

const setOfferPrice = function(card, price) {
  const elm = card.querySelector('.popup__text--price');
  if(price) {
    elm.textContent = `${price}  ₽/ночь`;
  } else {
    elm.hidden = true;
  }
};

const setOfferCapacity= function(card, capacity) {
  const elm = card.querySelector('.popup__text--capacity');
  const {rooms, guests} = capacity;
  if(rooms >= 0 && guests >= 0) {
    elm.textContent = `${rooms} комнаты для ${guests} гостей`;
  } else {
    elm.hidden = true;
  }
};

const setOfferTime= function(card, time) {
  const elm = card.querySelector('.popup__text--time');
  const {checkin, checkout} = time;
  if(checkin && checkout) {
    elm.textContent = `Заезд после ${checkin}, выезд до ${checkout}`;
  } else {
    elm.hidden = true;
  }
};

const setOfferDescription = function(card, description) {
  const elm = card.querySelector('.popup__description');
  if(description) {
    elm.textContent = description;
  } else {
    elm.hidden = true;
  }
};

const setOfferType = function(card, type) {
  const elm = card.querySelector('.popup__type');
  switch(type) {
    case 'flat':
      elm.textContent = 'Квартира';
      break;
    case 'bungalow':
      elm.textContent = 'Бунгало';
      break;
    case 'house':
      elm.textContent = 'Дом';
      break;
    case 'palace':
      elm.textContent = 'Дворец';
      break;
    case 'hotel':
      elm.textContent = 'Отель';
      break;
    default:
      elm.hidden = true;
  }
};

const setOfferFeatures = function(card, features) {
  const elm = card.querySelector('.popup__features');
  elm.textContent = '';
  if(features.length > 0) {
    features.forEach((element) => {
      const item = document.createElement('li');
      item.classList.add('popup__feature');
      item.classList.add(`popup__feature--${element}`);
      elm.append(item);
    });
  } else {
    elm.hidden = true;
  }
};

const setOfferPhotos = function(card, photos) {
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
  } else {
    elm.hidden = true;
  }
};

const renderСards = function(data) {
  const mapCanvas = document.querySelector('#map-canvas');
  const cardTemplate = document.querySelector('#card').content.querySelector('.popup');
  const cards = [];

  data.forEach(({author, offer}) => {
    const card = cardTemplate.cloneNode(true);
    const {avatar} = author;
    const {title, address, price, rooms, guests, checkin, checkout, type, description, features, photos} = offer;

    setAuthorAvatar(card, avatar);
    setOfferTitle(card, title);
    setOfferAddress(card, address);
    setOfferPrice(card, price);
    setOfferCapacity(card, {rooms, guests});
    setOfferTime(card, {checkin, checkout});
    setOfferDescription(card, description);
    setOfferType(card, type);
    setOfferFeatures(card, features);
    setOfferPhotos(card, photos);

    cards.push(card);
  });

  mapCanvas.append(cards[7]);
};

export {renderСards};
