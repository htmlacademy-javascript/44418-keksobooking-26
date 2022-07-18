import {form} from './form.js';

const FILES_TYPES = ['gif', 'jpg', 'jpeg', 'png'];

const fileAvatar = form.querySelector('#avatar');
const avatarPreview = form.querySelector('.ad-form-header__preview > img');
const filePhoto = form.querySelector('#images');
const photoPreview = form.querySelector('.ad-form__photo > img');

const addPreview = (evt, elm) => {
  const file = evt.target.files[0];
  const fileName = file.name.toLowerCase();

  const matches = FILES_TYPES.some((it) => fileName.endsWith(it));

  if (matches) {
    elm.src = URL.createObjectURL(file);
  }
};

fileAvatar.addEventListener('change', (evt) => {
  addPreview(evt, avatarPreview);
});

filePhoto.addEventListener('change', (evt) => {
  addPreview(evt, photoPreview);
});
