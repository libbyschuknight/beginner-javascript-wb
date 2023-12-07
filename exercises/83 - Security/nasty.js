// The rule is that anytime you are taking data from the user and embedding it in HTML you must first sanitize it.
// Anywhere that you are using.innerHTML or using insertAdjacentHTML, or really anywhere that you are taking user data and generating HTML from that, you must first sanitize the data.

import { sanitize } from 'dompurify';

const input = document.querySelector('[name="input"]');
const output = document.querySelector('.output');
const buttons = document.querySelectorAll('nav button');
input.addEventListener('input', () => {
  const clean = sanitize(input.value, {
    FORBID_ATTR: ['width', 'height', 'style'],
    FORBID_TAGS: ['style'],
  });
  output.innerHTML = clean.replace(/\n/g, '<br>');
});

// trigger an input even on page load
input.dispatchEvent(new Event('input'));

buttons.forEach((button) =>
  button.addEventListener('click', (e) => {
    alert(e.currentTarget.textContent);
  })
);
