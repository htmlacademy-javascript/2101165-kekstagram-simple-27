import {isEscapeKey} from './util.js';

const uploadForm = document.querySelector('#upload-file');
const editorWindow = document.querySelector('.img-upload__overlay');
const body = document.querySelector('body');
const closeButton = document.querySelector('#upload-cancel');

const onEditorWindowEscKeydown = (evt) => {
    if (isEscapeKey(evt)) {
        evt.preventDefault();
        editorWindow.classList.add('hidden');
        body.classList.remove('modal-open');
    }
};

const closeForm = () => {
    editorWindow.classList.add('hidden');
    body.classList.remove('modal-open');

    document.removeEventListener('keydown', onEditorWindowEscKeydown);
};

uploadForm.addEventListener('change', () => {
    editorWindow.classList.remove('hidden');
    body.classList.add('modal-open');

    document.addEventListener('keydown', onEditorWindowEscKeydown);
});

closeButton.addEventListener('click', closeForm);

new Pristine(uploadForm);

wizardForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
  
    const isValid = pristine.validate();
    if (isValid) {
      console.log('Можно отправлять');
    } else {
      console.log('Форма невалидна');
    }
  });