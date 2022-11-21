import {isEscapeKey} from './util.js';
import {scaleImage} from './scale.js';
import {filterReset} from './filter.js';

const form = document.querySelector('.img-upload__form');
const modalWindow = document.querySelector('.img-upload__overlay');
const bodyElement = document.querySelector('body');
const closeButton = document.querySelector('.img-upload__cancel');
const imgUploadElement = document.querySelector('.img-upload__input');
const commentElement = document.querySelector('.text__description');

const onModalWindowEscapeKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    modalWindow.classList.add('hidden');
    bodyElement.classList.remove('.modal-open');
    imgUploadElement.value = '';
    commentElement.value = '';

    document.removeEventListener('keydown', onModalWindowEscapeKeydown);
  }
};

const openModalWindow = (evt) => {
  if (evt.target.type === 'file') {
    modalWindow.classList.remove('hidden');
    bodyElement.classList.add('modal-open');
    scaleImage();
    filterReset();

    document.addEventListener('keydown', onModalWindowEscapeKeydown);
  }
};

const closeModalWindow = () => {
  modalWindow.classList.add('hidden');
  bodyElement.classList.remove('.modal-open');
  imgUploadElement.value = '';
  commentElement.value = '';

  document.removeEventListener('keydown', onModalWindowEscapeKeydown);
};

form.addEventListener('change', openModalWindow);

closeButton.addEventListener('click', closeModalWindow);
