import {isEscapeKey} from './util.js';

const bodyElement = document.querySelector('body');
const successMessageTemplate = document.querySelector('#success').content.querySelector('.success');
const successMessageElement = successMessageTemplate.cloneNode(true);
const successButton = successMessageTemplate.querySelector('.success__button');

const messageFragment = document.createDocumentFragment();

const onSuccessMessageEscapeKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    successMessageElement.remove();

    document.removeEventListener('keydown', onSuccessMessageEscapeKeydown);
  }
};

const onNoSuccessMessageAreaClick = (evt) => {
  if (evt.target.className !== 'success__inner' && evt.target.className !== 'success__title') {
    successMessageElement.remove();

    document.removeEventListener('keydown', onSuccessMessageEscapeKeydown);
    document.removeEventListener('click', onNoSuccessMessageAreaClick);
  }
};

const showSuccessMessage = () => {
  messageFragment.appendChild(successMessageElement);
  bodyElement.appendChild(messageFragment);

  document.addEventListener('keydown', onSuccessMessageEscapeKeydown);
  document.addEventListener('click', onNoSuccessMessageAreaClick);
};

const closeSuccessMessage = () => {
  successMessageElement.remove();

  document.removeEventListener('keydown', onSuccessMessageEscapeKeydown);
  document.removeEventListener('click', onNoSuccessMessageAreaClick);
};

successButton.addEventListener('click', closeSuccessMessage);

export {showSuccessMessage};
