const butts = document.querySelector('.butts');
const coolButton = document.querySelector('.cool');

// butts.addEventListener('click', function() {
//   console.log('It got clicked!');
// });

// There are three steps with event listeners:
// - Go get something
// - Listen for something(such as a click)
// - Do something

function handleClick() {
  console.log('It got clicked!');
}

const hooray = () => console.log('HOORAY!');

butts.addEventListener('click', handleClick);

coolButton.addEventListener('click', hooray);

// butts.removeEventListener('click', handleClick); // unbinding

// // Listen on multiple items

// const buyButtons = document.querySelectorAll('button.buy');

// function buyItem() {
//   console.log('You are buying it!');
// }

// function handleBuyButtonClick(buyButton) {
//   console.log('binding the by button');
//   buyButton.addEventListener('click', buyItem);
// }

// buyButtons.forEach(handleBuyButtonClick);

// // buyButtons.forEach((button) => {
// //   button.addEventListener('click', buyItem);
// // });

// Listen on multiple items
// events - event object

const buyButtons = document.querySelectorAll('button.buy');

function handleBuyButtonClick(event) {
  console.log('you clicked the buton');
  // console.log('You are buying it!');
  // console.log(event); // pointer event
  // console.log(event.target);

  const button = event.target;
  // console.log(button.textContent);
  // console.log(parseFloat(event.target.dataset.price));

  console.log(event.target);
  console.log(event.currentTarget);
  console.log(event.target === event.currentTarget);
  // stop this event from bubbling up
  // event.stopPropagation();
}

buyButtons.forEach((buyButton) => {
  buyButton.addEventListener('click', handleBuyButtonClick);
});

window.addEventListener(
  'click',
  (event) => {
    console.log('YOU CLICKED THE WINDOW');
    console.log(event.target);
    console.log(event.type);
    console.log(event.bubbles);

    // event.stopPropagation();
    // event.target.click();
  },
  { capture: true }
);

const photoEl = document.querySelector('.photo');

photoEl.addEventListener('mouseenter', function (event) {
  console.log(event.currentTarget);
  console.log(this); // scoped to the element - photoEl, when it is this type of function - regular fuction
});

// photoEl.addEventListener('mouseenter', (event) => {
//   console.log(event.currentTarget);
//   console.log(this); // this key world is no longer scoped to the element, when it is an arrow function
// });

// don't use "this" in event listener call backs
