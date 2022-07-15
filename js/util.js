const ALERT_SHOW_TIME = 5000;

const showAlertError = function(message) {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = '9999';
  alertContainer.style.position = 'fixed';
  alertContainer.style.left = '0';
  alertContainer.style.bottom = '0';
  alertContainer.style.right = '0';
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '20px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'tomato';
  alertContainer.textContent = message;

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
};

const closeMessage = function() {
  const element = document.querySelector('#message');
  element.remove();
};

const onEscMessageKeydown = function(evt) {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    closeMessage();
    document.removeEventListener('keydown', onEscMessageKeydown);
  }
};

const addEventMessage = function(elm) {
  document.addEventListener('keydown', onEscMessageKeydown);
  elm.addEventListener('click', () => {
    closeMessage();
    document.removeEventListener('keydown', onEscMessageKeydown);
  });
};

const showMessageSuccess = function() {
  const messageTemplate = document.querySelector('#success').content.querySelector('.success');
  const messageElement = messageTemplate.cloneNode(true);

  document.body.append(messageElement);
  addEventMessage(messageElement);
};

const showMessageError = function() {
  const messageTemplate = document.querySelector('#error').content.querySelector('.error');
  const messageElement = messageTemplate.cloneNode(true);

  document.body.append(messageElement);
  addEventMessage(messageElement);
};

const debounce = function(callback, timeoutDelay) {
  let timeoutId;
  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
}


export {showAlertError, showMessageSuccess, showMessageError, debounce};
