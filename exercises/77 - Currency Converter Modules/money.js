import { init } from './init.js';

// // when the page loads this code runs!
// const form = document.querySelector('.app form');
// const optionsHTML = generateOptions(currencies);
// fromSelect.innerHTML = optionsHTML;
// toSelect.innerHTML = optionsHTML;
// form.addEventListener('input', handleInput);

// moved into init.js
// init();

// start the app
const app = document.querySelector('.app');

app.addEventListener('mouseenter', init, { once: true });
