import {getRandomArrayElement, getRandomInteger} from './util.js';

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

const createPhoto = (id) => ({
  id: id,
  url: `photos/${id}.jpg`,
  description: getRandomArrayElement(DESCRIPTIONS),
  likes: getRandomInteger(MIN_LIKE_INTEGER, MAX_LIKE_INTEGER),
  comments: getRandomInteger(MIN_COMMENT_INTEGER, MAX_COMMENT_INTEGER),
});

const generatePhotos = Array.from({length: PHOTOS_COUNT}, (item, index) => createPhoto(index + 1));

generatePhotos.reverse();
