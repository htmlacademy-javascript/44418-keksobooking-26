import { dataAds } from './data.js';
import { renderСards } from './card.js';
import { doInactiveForm, doActiveForm } from './form.js';

renderСards(dataAds());

doInactiveForm();
doActiveForm();
