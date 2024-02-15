const popup = document.querySelector('.modal')
const popupButton = document.querySelector('.modal__close')

popupButton.addEventListener('click', () => {
    popup.classList.remove('modal_active')
    document.cookie = 'popup=Popupclosed; max-age=' + 60 * 60 * 2 * 1;
});

const popupShowing = () => {
    if (document.cookie.includes('Popupclosed')) return;
    popup.classList.add('modal_active')
};

window.addEventListener('load', popupShowing)