// Функция, возвращающая случайное целое число из переданного диапазона включительно
// Подсмотрел часть решения на https://learn.javascript.ru
const getRandomInteger = function (min, max) {
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
const checkStringLength = function (string, maxLength) {
  if (string.length > maxLength) {
    return false;
  }
  return true;
};

getRandomInteger(2, 4);

checkStringLength('Один, два, три, четыре, пять', 10);
