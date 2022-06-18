console.log('works');

const wes = document.querySelector('.wes');

console.log(wes.children); // child elements
console.log(wes.firstElementChild);
console.log(wes.lastElementChild);
console.log(wes.previousElementSibling);
console.log(wes.nextElementSibling);
console.log(wes.parentElement);

console.log(wes.childNodes);

// // will include text nodes
// childNodes
// firstChild
// lastChild
// previousSibling
// nextSibling
// parentNode

const p = document.createElement('p');
p.textContent = 'I will be removed';
document.body.appendChild(p);

p.remove();

console.log(p);

document.body.appendChild(p);
