import {getData} from './api.js';
import {addPoints} from './map.js';
import {setFilterChange, setResetClick, reset, setFormSubmit, submitForm} from './form.js';
import {filterMap} from './filter.js';
import {showAlertError, debounce} from './util.js';

const FILTER_DELAY = 500;

getData((data) => {
  addPoints(data);
  setFilterChange(debounce(
    () => filterMap(data),
    FILTER_DELAY,
  ));
  setResetClick(() => {reset(data);});
  setFormSubmit((evt) => {submitForm(evt, data);});
}, showAlertError);
