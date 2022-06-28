const form = document.querySelector('.ad-form');
const filter = document.querySelector('.map__filters');

const doInactiveForm= function() {
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
    return true;
  } else if(value === 'flat') {
    price.placeholder = 1000;
    price.min = 1000;
    return true;
  } else if(value === 'hotel') {
    price.placeholder = 3000;
    price.min = 3000;
    return true;
  } else if(value === 'house') {
    price.placeholder = 5000;
    price.min = 5000;
    return true;
  } else if(value === 'palace') {
    price.placeholder = 10000;
    price.min = 10000;
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


form.addEventListener('submit', (evt) => {
  evt.preventDefault();
  pristine.validate();
});


export {doInactiveForm, doActiveForm};
