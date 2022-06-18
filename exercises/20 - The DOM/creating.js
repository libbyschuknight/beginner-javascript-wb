console.log('workds');

const myParagraph = document.createElement('p');
myParagraph.textContent = 'This is a new paragraph';
myParagraph.classList.add('special');

console.log(myParagraph);

const myImage = document.createElement('img');

myImage.src = 'https://picsum.photos/500';
myImage.alt = 'nice thing';

console.log(myImage);

const myDiv = document.createElement('div');

myDiv.classList.add('wrapper');
console.log(myDiv);

// document.body.appendChild(myDiv);
// myDiv.appendChild(myParagraph);
// myDiv.appendChild(myImage);

// better order
myDiv.appendChild(myParagraph);
myDiv.appendChild(myImage);
document.body.appendChild(myDiv);

const heading = document.createElement('h2');
heading.textContent = 'Cool heading';

myDiv.insertAdjacentElement('afterbegin', heading);

// ul
// li one
// li two
// li three
// li four
// li five
// ul

// // started doing this and then went to the list of items
// const oneLi = document.createElement('li');
// oneLi.textContent = 'one';

// mylist.appendChild(oneLi);
// //

// // ====
// const twoLi = document.createElement('li');
// twoLi.textContent = 'two';

// mylist.appendChild(twoLi);
// // ====

// const listDiv = document.createElement('div');
// listDiv.classList.add('list');

// const mylist = document.createElement('ul');
// listDiv.appendChild(mylist);

// const listItems = ['one', 'two', 'three', 'four', 'five'];

// listItems.forEach((item) => {
//   const listItem = document.createElement('li');
//   listItem.textContent = item;
//   mylist.appendChild(listItem);
// });

// console.log(listDiv);

// document.body.insertAdjacentElement('afterbegin', listDiv);

// not on page??

// // wes bos's way
// const list = document.createElement('ul');
// const li = document.createElement('li');
// li.textContent = 'three';

// list.appendChild(li);

// document.body.insertAdjacentElement('afterbegin', list);

// const li5 = document.createElement('li');
// li5.textContent = 'five';
// list.append(li5);

// const li1 = li5.cloneNode(true);
// li1.textContent = 'one';
// list.insertAdjacentElement('afterbegin', li1);

// const li4 = document.createElement('li');
// li4.textContent = 'four';
// li5.insertAdjacentElement('beforebegin', li4);

// const li2 = document.createElement('li');
// li2.textContent = 'four';
// li1.insertAdjacentElement('afterend', li2);
