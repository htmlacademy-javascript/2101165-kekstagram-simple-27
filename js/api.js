const getData = (onSuccess, onFail) => {
  fetch('https://27.javascript.pages.academy/kekstagram-simple/data')
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        onFail('Не загрузились изображения с сервера, попробуйте обновить страницу.');
      }
    })
    .then((data) => {
      onSuccess(data);
    })
    .catch(() => {
      onFail('Не загрузились изображения с сервера, попробуйте обновить страницу.');
    });
};

const sendData = (onSuccess, onFail, body) => {
  fetch(
    'https://27.javascript.pages.academy/kekstagram-simple',
    {
      method: 'POST',
      body,
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
