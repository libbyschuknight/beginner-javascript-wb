function wait(ms = 0) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

async function destroyPopup(popup) {
  popup.classList.remove('open');
  await wait(1000);
  popup.remove();
  // eslint-disable-next-line no-param-reassign
  popup = null;
  // eslint-enable-next-line no-param-reassign
}

function ask(options) {
  return new Promise(async (resolve) => {
    // first need to create a popup with all the fields in it
    const popup = document.createElement('form');
    popup.classList.add('popup');

    popup.insertAdjacentHTML(
      'afterbegin',
      `<fieldset>
          <label>${options.title}</label>
          <input type="text" name="input"/>
          <button type="submit">Submit</button>
        </fieldset>
       `
    );

    // check if they want a cancel button
    if (options.cancel) {
      const skipButton = document.createElement('button');
      skipButton.type = 'button';
      skipButton.textContent = 'Cancel';
      popup.firstElementChild.appendChild(skipButton);
      // TODO listen for a click on that cancel button
      skipButton.addEventListener(
        'click',
        () => {
          resolve(null);
          destroyPopup(popup);
        },
        { once: true }
      );
    }

    // listen for the submit event on the inputs
    popup.addEventListener(
      'submit',
      (e) => {
        e.preventDefault();
        popup.remove();
        resolve(e.target.input.value);
        // remove it from the DOM entirely
        destroyPopup(popup);
      },
      { once: true }
    );

    // when someone does submit it, resolve the data that was in the input box!

    // insert popup into the DOM
    document.body.appendChild(popup);
    // put a very small timeout before we add the open class - could also use 0 timeout
    // setTimeout(() => {
    //   popup.classList.add('open');
    // }, 50);
    await wait(50);
    popup.classList.add('open');

    // popup.input.focus();
  });
}

// select all button that have a question
async function askQuestion(e) {
  const button = e.currentTarget;
  const cancel = 'cancel' in button.dataset;
  // const cancel = button.hasAttribute('data-cancel');
  const answer = await ask({
    title: button.dataset.question,
    cancel,
  });
  console.log(answer);
}

// select all buttons that have a question
const buttons = document.querySelectorAll('[data-question]');
buttons.forEach((button) => button.addEventListener('click', askQuestion));

const questions = [
  { title: 'What is your name?' },
  { title: 'What is your age?', cancel: true },
  { title: 'What is your dogs name?' },
];

// We still have the problem of the UI popping up all the time so that is not what we want.

// Promise.all([ask(questions[0]), ask(questions[1]), ask(questions[2])]).then(
//   (answers) => {
//     console.log(answers);
//   }
// );

// const qPromises = questions.map(ask);
// console.log(qPromises);

// Promise.all(questions.map(ask)).then(data => {
//   console.log(data);
// });

// how do we make an async map function - forof loop
// The reason for that is unlike map and foreach, for of allows you to pause a loop by awaiting something inside of it, which is great.

async function asyncMap(array, callback) {
  // make an array to store our results
  const results = [];

  // loop over our array
  for (const item of array) {
    // const result = await callback(item);
    // results.push(result);
    results.push(await callback(item));
  }

  // when we are done the loop, return it!
  return results;
}

async function go() {
  const answers = await asyncMap(questions, ask);
  console.log(answers);
}

go();

// async function askMany() {
//   for (const question of questions) {
//     const answer = await ask(question);
//     console.log(answer);
//   }
// }

// askMany();
