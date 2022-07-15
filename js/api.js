const getData = function(onSuccess, onFail) {
  fetch('https://26.javascript.pages.academy/keksobooking/data')
    .then((response) => response.json())
    .then((data) => {
      data.sort(() => Math.random() - 0.5);
      onSuccess(data.slice(0, 10));
    })
    .catch(() => {
      onFail('При загрузке данных с сервера произошла ошибка. Попробуйте зайти позже.');
    });
};

const sendData = function(onSuccess, onFail, body) {
  fetch(
    'https://26.javascript.pages.academy/keksobooking',
    {
      method: 'POST',
      body: body,
    },
  )
    .then((response) => {
      if (response.ok) {
        onSuccess();
      } else {
        onFail();
      }
    })
    .catch(() => {
      onFail();
    });
};

export {getData, sendData};
