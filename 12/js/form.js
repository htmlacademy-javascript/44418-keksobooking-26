import {createSlider} from './slider.js';
import {showMessageSuccess, showMessageError} from './util.js';
import {sendData} from './api.js';
import {mainPinMarker, addPoints, markerGroup} from './map.js';

const form = document.querySelector('.ad-form');
const filter = document.querySelector('.map__filters');
const sliderElement = form.querySelector('.ad-form__slider');
const priceElement = form.querySelector('#price');
const submitButton = form.querySelector('.ad-form__submit');
const resetButton = form.querySelector('.ad-form__reset');

createSlider(sliderElement, priceElement);

const doInactiveForm = function() {
  const formElements = [...form.children];
  const filterElements = [...filter.children];

  form.classList.add('ad-form--disabled');
  formElements.forEach((item) => {
    item.disabled = true;
  });

  filter.classList.add('map__filters--disabled');
  filterElements.forEach((item) => {
    item.disabled = true;
  });
};

const doActiveForm = function() {
  const formElements = [...form.children];
  const filterElements = [...filter.children];

  form.classList.remove('ad-form--disabled');
  formElements.forEach((item) => {
    item.disabled = false;
  });

  filter.classList.remove('map__filters--disabled');
  filterElements.forEach((item) => {
    item.disabled = false;
  });
};

const pristine = new Pristine(form, {
  classTo: 'ad-form__element',
  errorClass: 'ad-form__element--invalid',
  successClass: 'ad-form__element--valid',
  errorTextParent: 'ad-form__element',
  errorTextTag: 'span',
  errorTextClass: 'ad-form__error'
});

const validateTitle = function(value) {
  return value.length >= 30 && value.length <= 100;
};
pristine.addValidator(form.querySelector('#title'), validateTitle, 'От 30 до 100 символов');


const validatePrice = function(value) {
  return value <= 100000;
};
pristine.addValidator(form.querySelector('#price'), validatePrice, 'Максимальная сумма 100 000 руб');


const validateRoomNumber = function(value) {
  const capacityValue = form.querySelector('#capacity').value;

  if(value === '1') {
    return capacityValue === '1';
  } else if(value === '2') {
    return capacityValue === '1' || capacityValue === '2';
  } else if(value === '3') {
    return capacityValue === '1' || capacityValue === '2' || capacityValue === '3';
  } else if(value === '100') {
    return capacityValue === '0';
  }
};

const getRoomNumberErrorMessage = function(value) {
  if(value === '1') {
    return '1 комната — для 1 гостя';
  } else if(value === '2') {
    return '2 комнаты — для 2 или 1 гостя';
  } else if(value === '3') {
    return '3 комнаты — для 3, 2 или 1 гостя';
  } else if(value === '100') {
    return '100 комнат — «не для гостей»';
  }
};

pristine.addValidator(form.querySelector('#room_number'), validateRoomNumber, getRoomNumberErrorMessage);


const validateType = function(value) {
  const price = form.querySelector('#price');

  if(value === 'bungalow') {
    price.placeholder = 0;
    price.min = 0;
    sliderElement.noUiSlider.updateOptions({
      range: {
        min: 0,
        max: 100000
      }
    });
    return true;
  } else if(value === 'flat') {
    price.placeholder = 1000;
    price.min = 1000;
    sliderElement.noUiSlider.updateOptions({
      range: {
        min: 1000,
        max: 100000
      }
    });
    return true;
  } else if(value === 'hotel') {
    price.placeholder = 3000;
    price.min = 3000;
    sliderElement.noUiSlider.updateOptions({
      range: {
        min: 3000,
        max: 100000
      }
    });
    return true;
  } else if(value === 'house') {
    price.placeholder = 5000;
    price.min = 5000;
    sliderElement.noUiSlider.updateOptions({
      range: {
        min: 5000,
        max: 100000
      }
    });
    return true;
  } else if(value === 'palace') {
    price.placeholder = 10000;
    price.min = 10000;
    sliderElement.noUiSlider.updateOptions({
      range: {
        min: 10000,
        max: 100000
      }
    });
    return true;
  }
};

pristine.addValidator(form.querySelector('#type'), validateType);


const validateTimein = function(value) {
  const timeoutOptions = form.querySelectorAll('#timeout > option');

  if(value === '12:00') {
    timeoutOptions.forEach((el) => {
      if(el.value === '12:00') {
        el.selected = true;
      }
    });
    return true;
  } else if(value === '13:00') {
    timeoutOptions.forEach((el) => {
      if(el.value === '13:00') {
        el.selected = true;
      }
    });
    return true;
  } else if(value === '14:00') {
    timeoutOptions.forEach((el) => {
      if(el.value === '14:00') {
        el.selected = true;
      }
    });
    return true;
  }
};

pristine.addValidator(form.querySelector('#timein'), validateTimein);


const validateTimeout = function(value) {
  const timeinOptions = form.querySelectorAll('#timein > option');

  if(value === '12:00') {
    timeinOptions.forEach((el) => {
      if(el.value === '12:00') {
        el.selected = true;
      }
    });
    return true;
  } else if(value === '13:00') {
    timeinOptions.forEach((el) => {
      if(el.value === '13:00') {
        el.selected = true;
      }
    });
    return true;
  } else if(value === '14:00') {
    timeinOptions.forEach((el) => {
      if(el.value === '14:00') {
        el.selected = true;
      }
    });
    return true;
  }
};

pristine.addValidator(form.querySelector('#timeout'), validateTimeout);

const blockSubmitButton = function() {
  submitButton.disabled = true;
};

const unblockSubmitButton = function() {
  submitButton.disabled = false;
};

const reset = function(data) {
  form.reset();
  filter.reset();
  form.querySelector('.ad-form-header__preview > img').src = 'img/muffin-grey.svg';
  form.querySelector('.ad-form__photo > img').src = 'img/muffin-grey.svg';
  markerGroup.clearLayers();

  mainPinMarker.setLatLng({
    lat: 35.68952,
    lng: 139.69199,
  }).addTo(markerGroup);

  addPoints(data);
};


const setResetClick = function(cb) {
  resetButton.addEventListener('click', () => {
    cb();
  });
};

const setFormSubmit = function(cb) {
  form.addEventListener('submit', (evt) => {
    evt.preventDefault();
    cb(evt);
  });
};

const submitForm = function(evt, data) {
  const formData = new FormData(evt.target);
  const isValid = pristine.validate();
  if(isValid) {
    blockSubmitButton();
    sendData(
      () => {
        showMessageSuccess();
        unblockSubmitButton();
        reset(data);
      },
      () => {
        showMessageError();
        unblockSubmitButton();
      },
      formData,
    );
  }
};

const setFilterChange = function(cb) {
  filter.addEventListener('change', () => {
    cb();
  });
};


export {doInactiveForm, doActiveForm, form, filter, reset, setFilterChange, setResetClick, setFormSubmit, submitForm};
