import { dataAds } from './data.js';
import { renderСards } from './card.js';
import { isInactiveState, isActiveState } from './form.js';

renderСards(dataAds());

isActiveState();
isInactiveState();
