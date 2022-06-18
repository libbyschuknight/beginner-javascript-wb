console.log('works');
// Make a div
const div = document.createElement('div');

// add a class of wrapper to it
div.classList.add('wrapper');

// put it into the body
document.body.appendChild(div);

// make an unordered list
// const listDiv = document.createElement('div');
// listDiv.classList.add('list');

const mylist = document.createElement('ul');

// add three list items with the words "one, two, three" in them
const listItems = ['one', 'two', 'three'];
listItems.forEach((item) => {
  const listItem = document.createElement('li');
  listItem.textContent = item;
  mylist.appendChild(listItem);
});

// put that list into the above wrapper
const wrapper = document.querySelector('.wrapper');
wrapper.appendChild(mylist);

// create an image
const image = document.createElement('img');

// set the source to an image
image.src = 'https://picsum.photos/200';
// set the width to 250
image.width = 250;
// add a class of cute
image.classList.add('cute');

// add an alt of Cute Puppy
image.alt = 'Cute Puppy';

// Append that image to the wrapper
wrapper.appendChild(image);

// with HTML string, make a div, with two paragraphs inside of it
// put this div before the unordered list from above
// const HTMLstring = `
//   <div>
//     <p class="one">paragraph one</p>
//     <p class"two">paragraph two</p>
//   </div>
// `;
const HTMLstring = `
  <div>
    <p>paragraph one</p>
    <p>paragraph two</p>
  </div>
`;

document.body.insertAdjacentHTML('afterbegin', HTMLstring);

// add a class to the second paragraph called warning
const firstDiv = document.querySelector('div');

const secondPara = firstDiv.lastElementChild;
secondPara.classList.add('warning');

// remove the first paragraph
const firstPara = firstDiv.firstElementChild;
firstPara.remove();

// create a function called generatePlayerCard that takes in three arguments: name, age, and height

const generatePlayerCard = function (name, age, height) {
  const AGEINDOGYEARS = 100;
  return `<div class="playerCard">
    <h2>${name} — ${age}</h2>
    <p>They are ${height} and ${age} years old. In Dog years this person would be ${AGEINDOGYEARS}. That would be a tall dog!</p>
  </div>
  `;
};

console.log(generatePlayerCard('lib', 47, 100));

// have that function return html that looks like this:
// <div class="playerCard">
//   <h2>NAME — AGE</h2>
//   <p>They are HEIGHT and AGE years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
// </div>

// make a new div with a class of cards

// make 4 player cards using generatePlayerCard

// append those cards to the div
// put the div into the DOM just before the wrapper element
// Bonus, put a delete Button on each card so when you click it, the whole card is removed

// select all the buttons!
// make out delete function
// loop over them and attach a listener
