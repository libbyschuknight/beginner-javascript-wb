const cardButtons = document.querySelectorAll('.card button');
const modalOuter = document.querySelector('.modal-outer');
const modalInner = document.querySelector('.modal-inner');

function handleCardButtonClick(event) {
  const button = event.currentTarget;

  // Make a variable called card to store the element that is a parentNode of the button
  // const card = button.parentNode;
  const card = button.closest('.card');

  // Select the img inside the card
  const imgSrc = card.querySelector('img').src;
  const desc = card.dataset.description;
  const name = card.querySelector('h2').textContent;

  // populate the modal with the new info
  modalInner.innerHTML = `
    <img width="600" height="600" src="${imgSrc.replace('200', '600')}" alt="${name}" />
    <p>${desc}</p>
  `;

  // show the modal
  modalOuter.classList.add('open');

  // Toggle a class called 'toggle' on the card
  // card.classList.toggle('toggle');
}

cardButtons.forEach((button) =>
  button.addEventListener('click', handleCardButtonClick)
);

function closeModal() {
  modalOuter.classList.remove('open');
}

modalOuter.addEventListener('click', (event) => {
  const isOutside = !event.target.closest('.modal-inner');
  if (isOutside) {
    closeModal();
  }
});

window.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    closeModal();
  }
});

// 21 mins - more fun stuff
