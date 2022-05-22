// console.log('works');

// const p = document.querySelector('p');
// const divs = document.querySelectorAll('div');
// const items = document.querySelector('.items');
// const imgs = items.querySelector('img');
// console.log(p);
// console.log(divs);
// console.log(items);
// console.log(imgs);

// const heading = document.querySelector('h2');
// // console.dir(heading); // can see properties
// console.dir(heading.textContent); // getter

// // heading.textContent = 'Hello World'; // setter
// console.log(heading.textContent); // textContent is newer, returns every element in the node, including styles, etc.
// console.log(heading.innerText); // only shows human readable text

// console.log(heading.innerHTML);
// console.log(heading.outerHTML);

// const pizzaList = document.querySelector('.pizza');
// console.log(pizzaList.textContent);

// // pizzaList.textContent = `${pizzaList.textContent} 🍕`;
// pizzaList.insertAdjacentText('afterbegin', '🍕');
// pizzaList.insertAdjacentText('beforeend', '🍕');

// console.log(pizzaList.textContent);

// Classes

// const pic = document.querySelector('.nice');
// pic.classList.add('open');
// pic.classList.add('cool');
// pic.classList.toggle('round');
// console.log(pic.classList);

// function toggleRound() {
//   pic.classList.toggle('round');
// }

// pic.addEventListener('click', toggleRound);

// attributes - most are getters and setters
// pic.alt = 'pizza';
// pic.width = 200;
// console.log(pic.naturalWidth); // on log it is 0, cos have to wait for image to load

// window.addEventListener('load', () => {
//   console.log(pic.naturalWidth); // only a getter
// });

// pic.setAttribute('alt', 'pizza big!!'); // no standard, can set a non-standard attribute
// console.log(pic.getAttribute('alt'));

// if want to use own attributes, you use data atttributes - meta data
// data-name, etc

// console.log(document.querySelectorAll('[data-name]'));

// const custom = document.querySelector('.custom');

// console.log(custom.dataset);

// custom.addEventListener('click', () => {
//   alert(`Welcome ${custom.dataset.name} ${custom.dataset.last}`);
// });
