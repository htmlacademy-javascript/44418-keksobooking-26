import { dataAds } from './data.js';
import { renderСards } from './card.js';
import { doInactiveState, doActiveState } from './form.js';

renderСards(dataAds());

doInactiveState();
doActiveState();
