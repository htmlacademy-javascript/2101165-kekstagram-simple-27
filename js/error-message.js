import {isEscapeKey} from './util.js';
import {onModalWindowEscapeKeydown} from './form.js';

const bodyElement = document.querySelector('body');
const errorMessageTemplate = document.querySelector('#error').content.querySelector('.error');
const errorButton = errorMessageTemplate.querySelector('.error__button');
const errorMessageElement = errorMessageTemplate.cloneNode(true);

const messageFragment = document.createDocumentFragment();

const onErrorMessageEscapeKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    errorMessageElement.remove();

    document.removeEventListener('keydown', onErrorMessageEscapeKeydown);
    document.addEventListener('keydown', onModalWindowEscapeKeydown);
  }
};

const onNoErrorMessageAreaClick = (evt) => {
  if (evt.target.className !== 'error__inner' && evt.target.className !== 'error__title') {
    errorMessageElement.remove();

    document.removeEventListener('keydown', onErrorMessageEscapeKeydown);
    document.removeEventListener('click', onNoErrorMessageAreaClick);
    document.addEventListener('keydown', onModalWindowEscapeKeydown);
  }
};

const showErrorMessage = () => {
  messageFragment.appendChild(errorMessageElement);
  bodyElement.appendChild(messageFragment);

  document.addEventListener('keydown', onErrorMessageEscapeKeydown);
  document.addEventListener('click', onNoErrorMessageAreaClick);
  document.removeEventListener('keydown', onModalWindowEscapeKeydown);
};

const closeErrorMessage = () => {
  errorMessageElement.remove();

  document.removeEventListener('keydown', onErrorMessageEscapeKeydown);
  document.removeEventListener('click', onNoErrorMessageAreaClick);
  document.addEventListener('keydown', onModalWindowEscapeKeydown);
};

errorButton.addEventListener('click', closeErrorMessage);

export {showErrorMessage};
