import { createAds } from './data.js';
const mapCanvas = document.querySelector('#map-canvas');
const cardTemplate = document.querySelector('#card').content.querySelector('.popup');

const ads = createAds();
const cards = [];

ads.forEach(({author, offer}) => {
  const card = cardTemplate.cloneNode(true);

  card.querySelector('.popup__title').textContent = offer.title;
  card.querySelector('.popup__text--address').textContent = offer.address;
  card.querySelector('.popup__text--price').textContent = `${offer.price}  ₽/ночь`;
  card.querySelector('.popup__text--capacity').textContent = `${offer.rooms} комнаты для ${offer.guests} гостей`;
  card.querySelector('.popup__text--time').textContent = `Заезд после ${offer.checkin}, выезд до ${offer.checkout}`;
  card.querySelector('.popup__avatar').src = author.avatar;

  const offerDescription = card.querySelector('.popup__description');
  if(!offer.description) {
    offerDescription.textContent = offer.description;
  } else {
    offerDescription.hidden = true;
  }

  const offerType = card.querySelector('.popup__type');
  switch(offer.type) {
    case 'flat':
      offerType.textContent = 'Квартира';
      break;
    case 'bungalow':
      offerType.textContent = 'Бунгало';
      break;
    case 'house':
      offerType.textContent = 'Дом';
      break;
    case 'palace':
      offerType.textContent = 'Дворец';
      break;
    case 'hotel':
      offerType.textContent = 'Отель';
      break;
  }

  const offerFeatures = card.querySelector('.popup__features');
  offerFeatures.textContent = '';
  offer.features.forEach((element) => {
    const item = document.createElement('li');
    item.classList.add('popup__feature');
    item.classList.add(`popup__feature--${element}`);
    offerFeatures.append(item);
  });

  const offerPhotos = card.querySelector('.popup__photos');
  offerPhotos.textContent = '';
  if(offer.photos.length !== 0) {
    offer.photos.forEach((element) => {
      const photo = document.createElement('img');
      photo.classList.add('popup__photo');
      photo.width = 45;
      photo.height = 40;
      photo.alt = 'Фотография жилья';
      photo.src = element;
      offerPhotos.append(photo);
    });
  } else {
    offerPhotos.hidden = true;
  }
  cards.push(card);
});

mapCanvas.append(cards[7]);
