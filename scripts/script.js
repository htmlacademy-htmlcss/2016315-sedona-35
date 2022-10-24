const modalCloseButton = document.querySelector('.modal-close-button');
const interestedLink = document.querySelector('.interested-link');
const modalContainer = document.querySelector('.modal-container')

interestedLink.addEventListener('click', function (evt) {
    evt.preventDefault();
    modalContainer.classList.add('modal-container--show');
});

modalCloseButton.addEventListener('click', function () {
    modalContainer.classList.remove('modal-container--show');
});
