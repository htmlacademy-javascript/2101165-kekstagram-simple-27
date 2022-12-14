const similarListElement = document.querySelector('.pictures');
const similarListTemplate = document.querySelector('#picture').content.querySelector('.picture');

const similarListFragment = document.createDocumentFragment();

const loadPhotos = (photos) => {
  photos.forEach(({url, likes, comments}) => {
    const pictureElement = similarListTemplate.cloneNode(true);
    pictureElement.querySelector('.picture__img').src = url;
    pictureElement.querySelector('.picture__likes').textContent = likes;
    pictureElement.querySelector('.picture__comments').textContent = comments;
    similarListFragment.appendChild(pictureElement);
  });

  similarListElement.appendChild(similarListFragment);
};

export {loadPhotos};
