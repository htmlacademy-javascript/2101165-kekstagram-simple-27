import {isEscapeKey} from './util.js';

const uploadForm = document.querySelector('.img-upload__form');
const editorWindow = uploadForm.querySelector('.img-upload__overlay');
const bodyElement = uploadForm.querySelector('body');
const closeButton = uploadForm.querySelector('.img-upload__cancel');
const imgUploadElement = uploadForm.querySelector('.img-upload__input');
const commentElement = uploadForm.querySelector('.text__description');

const onEditorWindowEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    editorWindow.classList.add('hidden');
    bodyElement.classList.remove('modal-open');
    imgUploadElement.value = '';
    commentElement.value = '';
  }
};

const closeForm = () => {
  editorWindow.classList.add('hidden');
  bodyElement.classList.remove('modal-open');
  imgUploadElement.value = '';
  commentElement.value = '';

  document.removeEventListener('keydown', onEditorWindowEscKeydown);
};

uploadForm.addEventListener('change', () => {
  editorWindow.classList.remove('hidden');
  bodyElement.classList.add('modal-open');

  document.addEventListener('keydown', onEditorWindowEscKeydown);
});

closeButton.addEventListener('click', closeForm);
