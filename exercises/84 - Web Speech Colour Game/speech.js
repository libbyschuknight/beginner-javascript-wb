import { handleResult } from './handlers';
import { colorsByLength, isDark } from './colors';

const colorsEl = document.querySelector('.colors');

function displayColors(colors) {
  return colors
    .map(
      (color) =>
        `<span class="color ${color} ${
          isDark(color) ? 'dark' : ''
        }" style="background: ${color};">${color}</span>`
    )
    .join('');

  // const colorHTML = colorsByLength
  //   .map(
  //     color =>
  //       `<span class="color ${isDark(color) ? 'dark' : ''}" style="background: ${color};">${color}</span>`
  //   )
  //   .join('');
  // const colorsDiv = document.querySelector('.colors');
  // colorsDiv.innerHTML = colorHTML;
}

window.SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

function start() {
  // see if their browser supports this
  if (!('SpeechRecognition' in window)) {
    console.log('Sorry your browser does not support speech reco. ');
    return;
  }
  // it does work
  const recognition = new SpeechRecognition();
  recognition.continuous = true;
  recognition.interimResults = true;
  recognition.onresult = handleResult;
  recognition.start();
}

start();

colorsEl.innerHTML = displayColors(colorsByLength);
