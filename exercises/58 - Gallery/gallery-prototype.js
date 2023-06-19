// console.log('works');

function Gallery(gallery) {
  if (!gallery) {
    throw new Error('No gallery found!');
  }

  this.gallery = gallery;

  // Select the elements we need
  this.images = Array.from(gallery.querySelectorAll('img'));
  this.modal = document.querySelector('.modal');
  this.prevButton = this.modal.querySelector('.prev');
  this.nextButton = this.modal.querySelector('.next');

  // Event listeners
  this.images.forEach((image) =>
    image.addEventListener('click', (event) =>
      this.showImage(event.currentTarget)
    )
  );
  this.modal.addEventListener('click', this.handleClickOutside);

  // Loop over each image
  this.images.forEach((image) => {
    // attach an event listener for each image
    image.addEventListener('keyup', (event) => {
      // when that is keyup'd, check if it was enter
      if (event.key === 'Enter') {
        // if it was, show that image
        this.showImage(event.currentTarget);
      }
    });
  });
}

Gallery.prototype.openModal = function () {
  console.info('Opening Modal...');
  // First check if the modal is already open
  if (this.modal.matches('.open')) {
    console.info('Modal already open');
    return; // stop the function from running
  }
  this.modal.classList.add('open');

  // Event listeners to be bound when we open the modal:
  window.addEventListener('keyup', this.handleKeyUp);
  this.nextButton.addEventListener('click', this.showNextImage);
  this.prevButton.addEventListener('click', this.showPrevImage);
};

Gallery.prototype.closeModal = function () {
  this.modal.classList.remove('open');
  // Remove event listeners for clicks and keyboard...
  window.removeEventListener('keyup', this.handleKeyUp);
  this.nextButton.removeEventListener('click', this.showNextImage);
  this.prevButton.removeEventListener('click', this.showPrevImage);
};

Gallery.prototype.handleClickOutside = function (event) {
  if (event.target === event.currentTarget) {
    this.closeModal();
  }
};

Gallery.prototype.handleKeyUp = function (event) {
  if (event.key === 'Escape') return this.closeModal();
  if (event.key === 'ArrowRight') return this.showNextImage();
  if (event.key === 'ArrowLeft') return this.showPrevImage();
};

// When we click an image, show the modal
Gallery.prototype.showImage = function (element) {
  if (!element) {
    console.info('No image to show');
    return;
  }
  // Update the modal with this info
  console.log(element);
  this.modal.querySelector('img').src = element.src;
  this.modal.querySelector('h2').textContent = element.title;
  this.modal.querySelector('figure p').textContent =
    element.dataset.description;
  this.currentImage = element;
  this.openModal();
};

Gallery.prototype.showNextImage = function () {
  this.showImage(
    this.currentImage.nextElementSibling || Gallery.firstElementChild
  );
};

Gallery.prototype.showPrevImage = function () {
  this.showImage(
    this.currentImage.previousElementSibling || Gallery.lastElementChild
  );
};

// Use it on the page
const gallery1 = new Gallery(document.querySelector('.gallery1'));
const gallery2 = new Gallery(document.querySelector('.gallery2'));

console.log(gallery1, gallery2);
