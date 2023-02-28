import { galleryItems } from './gallery-items.js';
// Change code below this line

const divEl = document.querySelector('.gallery');

divEl.addEventListener('click', clickOnImage)

const cardsMarkup = createGalleryItems(galleryItems);

divEl.insertAdjacentHTML('beforeend', cardsMarkup);

function createGalleryItems(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `
        <div class="gallery__item">
            <a class="gallery__link" href="large-image.jpg">
                <img
                    class="gallery__image"
                    src="${preview}"
                    data-source="${original}"
                    alt="${description}"
                />
            </a>
        </div>
        `
    }).join('');
}

function clickOnImage(evt) {
    blockStandartAction(evt);

    if (evt.target.nodeName !== 'IMG') {
        return;
    }

    const instance = basicLightbox.create(`
        <img src="${evt.target.dataset.source}" width="800" height="600">
    `)
    instance.show();

    divEl.addEventListener('keydown', (evt) => {
        if (evt.code === 'Escape') {
            instance.close();
        }
    })
}

function blockStandartAction(evt) {
    evt.preventDefault();
}
