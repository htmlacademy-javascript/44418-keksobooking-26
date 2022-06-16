const form = document.querySelector('.ad-form');
const formElements = [...form.children];
const filter = document.querySelector('.map__filters');
const filterElements = [...filter.children];

const isInactiveState = function() {
  form.classList.add('ad-form--disabled');
  formElements.forEach((item) => {
    item.disabled = true;
  });

  filter.classList.add('map__filters--disabled');
  filterElements.forEach((item) => {
    item.disabled = true;
  });
};

const isActiveState = function() {
  form.classList.remove('ad-form--disabled');
  formElements.forEach((item) => {
    item.disabled = false;
  });

  filter.classList.remove('map__filters--disabled');
  filterElements.forEach((item) => {
    item.disabled = false;
  });
};

export {isInactiveState, isActiveState};
