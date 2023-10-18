const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const galleryListEl = document.querySelector('ul.gallery');

const makeGalleryCard = ({ url, alt } = {}) => {
  return `
    <li>
      <img src="${url}" alt="${alt}">
    </li>
  `;
};

const galleryCards = images.map((el) => makeGalleryCard(el)).join('');

galleryListEl.insertAdjacentHTML('beforeend', galleryCards);

galleryListEl.style.cssText = 'display: flex; gap: 10px; padding-left: 0;';

const galleryCardItemEl = galleryListEl.querySelectorAll('li');
galleryCardItemEl.forEach((el) => (el.style.listStyle = 'none'));

const galleryCardImgEl = galleryListEl.querySelectorAll('img');
galleryCardImgEl.forEach((el) => (el.style.maxWidth = '100%'));