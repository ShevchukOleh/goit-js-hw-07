import { galleryItems } from './gallery-items.js';

// Change code below this line
// console.log(galleryItems);

const divEl = document.querySelector('.gallery');

divEl.addEventListener('click', clickOnImage)

const cardsMarkup = createGalleryItems(galleryItems);

divEl.insertAdjacentHTML('beforeend', cardsMarkup);

function createGalleryItems(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `
            <a class="gallery__item" href="${original}">
                <img class="gallery__image" src="${preview}" alt="${description}" title="${description}"/>
            </a>
        `
    }).join('');
}

function clickOnImage(evt) {
    blockStandartAction(evt);

    if (evt.target.nodeName !== 'IMG') {
        return;
    }

    return lightbox = new SimpleLightbox('.gallery a', { caption: true, captionDelay: 250 });
}

function blockStandartAction(evt) {
    evt.preventDefault();
}