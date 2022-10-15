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

getRandomInteger(2, 4);

checkStringLength('Один, два, три, четыре, пять', 10);

const DESCRIPTIONS = [
  'Наконец-то я на море!',
  'Просто красивое место.',
  'Горизонт завален, но фотка - огонь.',
  'Видели ли вы такую красотищу?',
  'Обалдеть!',
];
const MIN_LIKE_INTEGER = 15;
const MAX_LIKE_INTEGER = 200;
const MIN_COMMENT_INTEGER = 0;
const MAX_COMMENT_INTEGER = 200;
const PHOTOS_COUNT = 25;

const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

const createPhoto = (id) => ({
  id: id,
  url: `photos/${id}.jpg`,
  description: getRandomArrayElement(DESCRIPTIONS),
  likes: getRandomInteger(MIN_LIKE_INTEGER, MAX_LIKE_INTEGER),
  comments: getRandomInteger(MIN_COMMENT_INTEGER, MAX_COMMENT_INTEGER),
});

const generatePhotos = Array.from({length: PHOTOS_COUNT}, (item, index) => createPhoto(index + 1));

generatePhotos.reverse();
