// 2.2. Наложение эффекта на изображение:

// По умолчанию должен быть выбран эффект «Оригинал».
// На изображение может накладываться только один эффект.
// При смене эффекта, выбором одного из значений среди радиокнопок .effects__radio, 
// добавить картинке внутри .img-upload__preview CSS-класс, соответствующий эффекту. 
// Например, если выбран эффект .effect-chrome, изображению нужно добавить класс effects__preview--chrome.

const uploadForm = document.querySelector('.img-upload__form'); 
const imageUploadPreview = uploadForm.querySelector('.img-upload__preview');
const effectsList = uploadForm.querySelectorAll('.effects__radio');

effectsList.forEach(
    item.addEventListener('click', (effectItem) => {
        imageUploadPreview.classList.add(`effects__preview--${effectItem.value}`);
    })
);