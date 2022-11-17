// ТЗ 2.1 Масштаб:

// При нажатии на кнопки .scale__control--smaller и .scale__control--bigger
// должно изменяться значение поля .scale__control--value;

// Значение должно изменяться с шагом в 25. Например, если значение поля установлено в 50%,
// после нажатия на «+», значение должно стать равным 75%. Максимальное значение — 100%,
// минимальное — 25%. Значение по умолчанию — 100%;

// При изменении значения поля .scale__control--value изображению внутри .img-upload__preview
// должен добавляться соответствующий стиль CSS, который с помощью трансформации scale задаёт масштаб.
// Например, если в поле стоит значение 75%, то в стиле изображения должно быть написано transform: scale(0.75).

const uploadForm = document.querySelector('.img-upload__form');
const scaleControlBiggerButton = uploadForm.querySelector('.scale__control--bigger');
const scaleControlSmallerButton = uploadForm.querySelector('.scale__control--smaller');
const scaleControlValue = uploadForm.querySelector('.scale__control--value');
const imageUploadPreview = uploadForm.querySelector('.img-upload__preview');
const MIN_SCALE_VALUE = 25;
const MAX_SCALE_VALUE = 100;
const DEFAULT_SCALE_VALUE = 100;
const CHANGE_SCALE_VALUE = 25;

const makeImgBigger = () => {
  if (scaleControlValue.value < MAX_SCALE_VALUE) {
    scaleControlValue.value = +scaleControlValue.value + CHANGE_SCALE_VALUE;
  }
  return scaleControlValue.value;
};

const makeImgSmaller = () => {
  if (scaleControlValue.value > MIN_SCALE_VALUE) {
    scaleControlValue.value = +scaleControlValue.value - CHANGE_SCALE_VALUE;
  }
  return scaleControlValue.value;
};

scaleControlBiggerButton.addEventListener('click', makeImgBigger);

scaleControlSmallerButton.addEventListener('click', makeImgSmaller);

scaleControlValue.addEventListener('change', () => {
  imageUploadPreview.target.style.backgroundColor = `transform: scale(${+scaleControlValue.value / 100})`;
});
