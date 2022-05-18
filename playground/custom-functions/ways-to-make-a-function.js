// console.log('it works');

// // func declaration
// function doctorize(firstName) {
//   return `Dr. ${firstName}`;
// }

// // anonymous func
// function (firstName) { // not valid JS in this case
//   return `Dr. ${firstName}`;
// }

// fucntion expression - funcs are first class citizens
// can out a function in a variable
// const docterize = function (firstName) {
//   return `Dr. ${firstName}`;
// };

// how they work in hoisting
// func declarations are hoisted, they are put to the top of the file
// func expressions are not hoisted

// arrow functions
// concise syntax, shorter, don't have own scope in ref to this keyword
// arrow funcs are anonymous functions

// function inchesToCM(inches) {
//   return inches * 2.54;
// }

// const inchesToCM = function inchesToCM(inches) {
//   return inches * 2.54;
// };

/* eslint-disable */
// const inchesToCM =  (inches) => {
//   return inches * 2.54;
// };

// const inchesToCM =  (inches) => { return inches * 2.54};

// const inchesToCM = (inches) => inches * 2.54;

// const inchesToCM = inches => inches * 2.54;


// function add(a, b = 3) {
//   const total =  a + b;
//   return total
// }

// const add = (a, b = 3) => a + b;


// return an object

// function makeABaby(first, last) {
//   const baby = {
//     name: `${first} ${last}`,
//     age: 0,
//   }
//   return baby
// }


// const makeABaby =  (first, last) => {
//   const baby = {
//     name: `${first} ${last}`,
//     age: 0,
//   }
//   return baby
// }

// implicitly return an object? use ()
// const makeABaby =  (first, last) => ({ name: `${first} ${last}`, age: 0 })
// better than regular function, nah


// IIFE - immediately invoked (run) function expression
// used more before things like block scopes

// (function() {
//   console.log('running anon function');
//   return 'you are cool'
// })();



// Methods!!!
// a function that lives inside of an object

// console is an object and log is the method, it is a function that lives inside of console, which is an object


const lib = {
  name: 'lib',
  // methid
  sayHi: function() {
    console.log('hi lib');
    return 'hi libby';
  },
  // short hand method
  yellHi() {
    console.log('hi')
  },
  // arrow function, could have arguments, arrow functions don't have own scope, use parent this
  whisper: () => {
    console.log('whisper');
  }
}



// call back functions
// reg func, when smething is done, run this

// So a callback function is just a regular function, but we use that name for something that will happen after something is done.

// The easiest way to define a callback function is either when someone clicks something, run this. Or when this amount of time has passed, run this.

// click callback

const button = document.querySelector('.clickMe');
// console.log(button);
// button.addEventListener('click', lib.yellHi);

function handleClick() {
  console.log('click');
}

// button.addEventListener('click', handleClick);

// passed it an anonymous function directly
button.addEventListener('click', function () {
  console.log('nice job');
});

// timer callback

// setTimeout(lib.yellHi, 1000);

// the anon function is know in this case as a callback function, it is called once the timer is at 1sec
setTimeout(function() {
  console.log('Done time to eat lunch!!!');
}, 1000);

// setTimeout(() => {
//   console.log('Done time to eat lunch!!!');
// }, 1000);
