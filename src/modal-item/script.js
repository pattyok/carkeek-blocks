
const modals = document.querySelectorAll('.wp-block-carkeek-blocks-modal-item.has-image');
modals.forEach((modal) => {
    const image = modal.querySelector('.ck-modal-item-image');
    if (image) {
        const clone = image.cloneNode(true);
        modal.querySelector('.modal-body').prepend(clone);
    }

});
