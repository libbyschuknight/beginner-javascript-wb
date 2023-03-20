// Topics: Custom Events, Event Delegation, local storage, DOM Events, Object Reference,

//  console.log('shopping.js is connected');

// we need an array to hold our state
// What does state mean ?

//   The definition changes from framework to framework, but generally what people are saying is that state is a bunch of data that reflects the state of your application.

// In this example, state is going to contain a list of all of your items, a list of those item ids, and whether they have been completed.

// If it was a shopping cart, state would be a list of all the items in the card, how many of each item was in the shopping cart, how expensive is each item, etc.

// You should always be able to recreate the visual part of your application given just the data.

// All of the current state of your application, meaning how it currently is, should always be reflected in some sort of object or array of data and that is what we refer to as state.

const shoppingForm = document.querySelector('.shopping');
const list = document.querySelector('.list');

const items = [];

function handleSubmit(e) {
  e.preventDefault();

  const name = e.currentTarget.item.value;
  const item = {
    name,
    id: Date.now(),
    complete: false,
  };

  // push the items into our state
  items.push(item);

  console.log(items.length);

  // clear the form
  e.target.reset();
  displayItems();
}

function displayItems() {
  // console.log(items);
  const html = items.map(item => `
    <li class="shopping-item">
      <input type="checkbox">
      <span class="itemName">${item.name}</span>
    </li>`
    )
    .join('')
  list.innerHTML = html;
};

shoppingForm.addEventListener('submit',  handleSubmit);


// 19,mins 26secs
