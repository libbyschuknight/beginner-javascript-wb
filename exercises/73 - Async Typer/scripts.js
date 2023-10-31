
function wait(ms = 0) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// One thing that people do not like about functions that get random numbers is that it is not a pure function. Pure functions are functions where every single time that you run the function with certain parameters, you will always get the same result.

// A pure function is the idea that a function that takes in arguments will always, always return the exact same value.That makes testing your functions easy.
// https://wesbos.com/javascript/12-advanced-flow-control/73-async-typer-ui-two-ways

// not a pure function, hard to test, everytine you run it get something differnt
// function getRandomBetween(min, max) {
//   return Math.floor(Math.random() * (max - min) + min);
// }

function getRandomBetween(min, max, randomNumber = Math.random()) {
  return Math.floor(randomNumber * (max - min) + min);
}

// async for of loop - wes bos would use this one personally
// async function draw(element) {
//   const text = element.textContent;
//   let soFar = '';
//   for (const letter of text) {
//     soFar += letter;
//     element.textContent = soFar;
//     // wait for some amount of time
//     // console.log(element.dataset);
//     const { typeMin, typeMax } = element.dataset;
//     const amountOfTimeToWait = getRandomBetween(typeMin, typeMax);
//     // wait for that amount of time
//     await wait(amountOfTimeToWait);
//   }
// }

// recursion

function draw(element) {
  let index = 1;
  const text = element.textContent;
  const { typeMin, typeMax } = element.dataset;

  async function drawLetter() {
    // take the text and slice it from 0 to index
    element.textContent = text.slice(0, index);
    index += 1;
    // exit condition
    const amountOfTimeToWait = getRandomBetween(typeMin, typeMax);
    await wait(amountOfTimeToWait);
    if (index <= text.length) {
      drawLetter();
    }
  }
  // when this function draw() runs, kick off drawLetter
  drawLetter();
}

// const els = document.querySelectorAll('[data-type]');
// // els.forEach((el) => draw(el));
// els.forEach(draw);

document.querySelectorAll('[data-type]').forEach(draw);
