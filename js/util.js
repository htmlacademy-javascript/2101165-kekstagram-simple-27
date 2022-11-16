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

export {getRandomInteger};
export {checkStringLength};
export {getRandomArrayElement};
export {isEscapeKey};
