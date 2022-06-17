const form = document.querySelector('.ad-form');
const filter = document.querySelector('.map__filters');


const doInactiveState = function() {
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

const doActiveState = function() {
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

export {doInactiveState, doActiveState};
