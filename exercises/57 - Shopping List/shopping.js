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

let items = [];

function handleSubmit(e) {
  e.preventDefault();

  const name = e.currentTarget.item.value;

  // if it is empty, then don't submit it
  if (!name) return;

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

  // fire off a custom event that will tell anyone else who cares that the items have been updated!
  list.dispatchEvent(new CustomEvent('itemsUpdated'));
}

function displayItems() {
  // console.log(items);
  // ${item.complete ? 'checked' : ''} // alternative to line 57
  const html = items.map(item => `
    <li class="shopping-item">
      <input
        value="${item.id}"
        type="checkbox"
        ${item.complete && 'checked'}
        >
      <span class="itemName">${item.name}</span>
      <button
        aria-label="Remove ${item.name}"
        value="${item.id}"
      >
        &times;
      </button>
    </li>`
    )
    .join('')
  list.innerHTML = html;
};

function mirrorToLocalStorage() {
  console.info('Saving items to local storage');
  localStorage.setItem('items', JSON.stringify(items));
}

function restoreFromLocalStorage() {
  console.info('Restoring from local storage');
  // pull the items from local storage
  const lsItems = JSON.parse(localStorage.getItem('items'));
  if (lsItems.length) { // if there are any items, we will push them into our items array
    // items = lsItems; // this will not work because we are trying to reassign a const
    // lsItems.forEach(item => items.push(item));
    // items.push(lsItems[0], lsItems[1], lsItems[2]) // this is not ideal
    items.push(...lsItems); // spread operator
    list.dispatchEvent(new CustomEvent('itemsUpdated'));
  }
}

function deleteItem(id) {
  // console.log('DELETING ITEM', id);
  // update our items array without this one
  items = items.filter(item => item.id !== id);
  list.dispatchEvent(new CustomEvent('itemsUpdated'));
}


function markAsComplete(id) {
  console.log('Marking as complete', id);
  const itemRef = items.find(item => item.id === id);
  console.log(itemRef);
  itemRef.complete = !itemRef.complete;
  list.dispatchEvent(new CustomEvent('itemsUpdated'));
}


shoppingForm.addEventListener('submit',  handleSubmit);
list.addEventListener('itemsUpdated', displayItems);
list.addEventListener('itemsUpdated', mirrorToLocalStorage);

// Event Delegation: We listen for the click on the list <ul> but then delegate the click over to the button if that is what was clicked
list.addEventListener('click', function(e) {
  // console.log(e.target);
  // console.log(e.currentTarget);
  const id = parseInt(e.target.value);
  if (e.target.matches('button')) {
    deleteItem(id);
  }

  if (e.target.matches('input[type="checkbox"]')) {
    markAsComplete(id);
  }
});

restoreFromLocalStorage();
