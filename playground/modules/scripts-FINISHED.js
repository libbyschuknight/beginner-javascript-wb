// entry point for all JS
// import first, { returnHi as sayHi, last, middle } from './utils-FINISHED.js';
// import { returnHi } from './utils-FINISHED.js';

// import * as everything from './wes-FINISHED.js';
// import person from './wes-FINISHED.js';
// console.log(person);

import { handleButtonClick } from './handlers-FINISHED.js';

const button = document.querySelector('button');

button.addEventListener('click', handleButtonClick);

// console.log(sayHi, last, middle, first);
// console.log(everything);

// // console.log(returnHi('libby'));
// console.log(sayHi('libby')); // returnHi has been renamed to sayHi in the import statement
