const image = document.querySelector('.img-upload__preview img');
const filterList = document.querySelector('.effects__list');
const noneFilter = document.querySelector('#effect-none');

const filterReset = () => {
  image.removeAttribute('class');
  noneFilter.checked = true;
};

const onFilterChange = (evt) => {
  if (evt.target.type === 'radio') {
    filterReset();
    image.classList.add(`effects__preview--${evt.target.value}`);
  }
};

filterList.addEventListener('change', onFilterChange);

export {filterReset};
