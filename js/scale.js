const scaleControlBiggerButton = document.querySelector('.scale__control--bigger');
const scaleControlSmallerButton = document.querySelector('.scale__control--smaller');
const scaleControlValue = document.querySelector('.scale__control--value');
const image = document.querySelector('.img-upload__preview img');

const MIN_SCALE_VALUE = 25;
const MAX_SCALE_VALUE = 100;
const DEFAULT_SCALE_VALUE = 100;
const CHANGE_SCALE_VALUE = 25;

const scaleImage = (value = DEFAULT_SCALE_VALUE) => {
  image.style.transform = `scale(${value / 100})`;
  scaleControlValue.value = `${value}%`;
};

const makeImgBigger = () => {
  let currentScaleValue = parseInt(scaleControlValue.value, 10);
  if (currentScaleValue < MAX_SCALE_VALUE) {
    currentScaleValue += CHANGE_SCALE_VALUE;
  }
  scaleImage(currentScaleValue);
};

const makeImgSmaller = () => {
  let currentScaleValue = parseInt(scaleControlValue.value, 10);
  if (currentScaleValue > MIN_SCALE_VALUE) {
    currentScaleValue -= CHANGE_SCALE_VALUE;
  }
  scaleImage(currentScaleValue);
};

scaleControlBiggerButton.addEventListener('click', makeImgBigger);

scaleControlSmallerButton.addEventListener('click', makeImgSmaller);

export {scaleImage};
