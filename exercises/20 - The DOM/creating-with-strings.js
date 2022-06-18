console.log('workds');
// const item = document.querySelector('.item');

const width = 200;

const src = `https://picsum.photos/${width}`;
const desc = `
  cute cat <h2>WHATTTTTTTTTT</h2>
  <style>* { display: none; }</style>
  <script>alert('oh no! 🤯🤯🤯');</script>
`; //  coming from user - if they are editing the description
// allow them to run any JS on your website

const myHTML = `
  <div class="wrapper">
    <h2>${desc}</h2>
    <img src="${src}">
  <div>
`;

// item.innerHTML = myHTML;

// console.log(item.innerHTML);

// turn a string into a dom element
const myFragment = document.createRange().createContextualFragment(myHTML);

// myFragment.querySelector('img');

document.body.appendChild(myFragment);

console.log(myFragment);
