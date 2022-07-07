const setAuthorAvatar= function(popup, avatar) {
  const elm = popup.querySelector('.popup__avatar');
  if(avatar) {
    elm.src = avatar;
  } else {
    elm.hidden = true;
  }
};

const setOfferTitle = function(popup, title) {
  const elm = popup.querySelector('.popup__title');
  if(title) {
    elm.textContent = title;
  } else {
    elm.hidden = true;
  }
};

const setOfferAddress = function(popup, address) {
  const elm = popup.querySelector('.popup__text--address');
  if(address) {
    elm.textContent = address;
  } else {
    elm.hidden = true;
  }
};

const setOfferPrice = function(popup, price) {
  const elm = popup.querySelector('.popup__text--price');
  if(price) {
    elm.textContent = `${price}  ₽/ночь`;
  } else {
    elm.hidden = true;
  }
};

const setOfferCapacity= function(popup, capacity) {
  const elm = popup.querySelector('.popup__text--capacity');
  const {rooms, guests} = capacity;
  if(rooms >= 0 && guests >= 0) {
    elm.textContent = `${rooms} комнаты для ${guests} гостей`;
  } else {
    elm.hidden = true;
  }
};

const setOfferTime= function(popup, time) {
  const elm = popup.querySelector('.popup__text--time');
  const {checkin, checkout} = time;
  if(checkin && checkout) {
    elm.textContent = `Заезд после ${checkin}, выезд до ${checkout}`;
  } else {
    elm.hidden = true;
  }
};

const setOfferDescription = function(popup, description) {
  const elm = popup.querySelector('.popup__description');
  if(description) {
    elm.textContent = description;
  } else {
    elm.hidden = true;
  }
};

const setOfferType = function(popup, type) {
  const elm = popup.querySelector('.popup__type');
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

const setOfferFeatures = function(popup, features) {
  const elm = popup.querySelector('.popup__features');
  elm.textContent = '';
  if(features) {
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

const setOfferPhotos = function(popup, photos) {
  const elm = popup.querySelector('.popup__photos');
  elm.textContent = '';
  if(photos) {
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

const createPopup = function(data) {
  const popupTemplate = document.querySelector('#card').content.querySelector('.popup');
  const popupElement = popupTemplate.cloneNode(true);

  const {avatar} = data.author;
  const {title, address, price, rooms, guests, checkin, checkout, type, description, features, photos} = data.offer;

  setAuthorAvatar(popupElement, avatar);
  setOfferTitle(popupElement, title);
  setOfferAddress(popupElement, address);
  setOfferPrice(popupElement, price);
  setOfferCapacity(popupElement, {rooms, guests});
  setOfferTime(popupElement, {checkin, checkout});
  setOfferDescription(popupElement, description);
  setOfferType(popupElement, type);
  setOfferFeatures(popupElement, features);
  setOfferPhotos(popupElement, photos);

  return popupElement;
};

export {createPopup};
