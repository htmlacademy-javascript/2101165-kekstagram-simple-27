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

const createPhoto = (id) => ({
  id: id,
  url: `photos/${id}.jpg`,
  description: DESCRIPTIONS[getRandomInteger(0, DESCRIPTIONS.length - 1)],
  likes: getRandomInteger(15, 200),
  comments: getRandomInteger(0, 200),
});

const generatePhotos = Array.from({length: 25}, (item, index) => createPhoto(index + 1));

generatePhotos.reverse();
