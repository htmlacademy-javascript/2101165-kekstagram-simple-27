// Функция, возвращающая случайное целое число из переданного диапазона включительно
// Подсмотрел часть решения на https://learn.javascript.ru
const getRandomInteger = (min, max) => {
  if (typeof(min) !== 'number' || typeof(max) !== 'number') {
    return NaN;
  }
  if (min > max) {
    const swap = min;
    min = max;
    max = swap;
  }
  return Math.floor(min + Math.random() * (max + 1 - min));
};

// Функция для проверки максимальной длины строки
const checkStringLength = (string, maxLength) => {
  if (string.length > maxLength) {
    return false;
  }
  return true;
};

const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

const isEscapeKey = (evt) => evt.key === 'Escape';

const elementClean = (element) => {
  element.remove();
};

const showAlert = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = '100';
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = '0';
  alertContainer.style.top = '0';
  alertContainer.style.right = '0';
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.lineHeight = 1;
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'red';

  alertContainer.textContent = message;

  document.body.append(alertContainer);
};


export {getRandomInteger};
export {checkStringLength};
export {getRandomArrayElement};
export {isEscapeKey};
export {elementClean};
export {showAlert};
