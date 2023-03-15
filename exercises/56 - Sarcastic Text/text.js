const textArea = document.querySelector('[name="text"]');
const result = document.querySelector('.result');
const filterInputs = document.querySelectorAll('[name="filter"]');

// console.log(textArea, result, filterInputs);


const filters = {
  sarcastic(letter, index) {
    // if it is odd, it will return 1 and that is truthy, so this if statement will run
    if (index % 2) {
      return letter.toUpperCase();
    }
    // if it is even, it will return 0 and we will lowercase it
    return letter.toLowerCase();
  },
  funky() {

  },
  unable() {

  },
}

function transformText(text) {
  // take the test and loop over each character
  const mod = Array.from(text).map(filters.sarcastic);
  console.log(mod);
  result.textContent = text;
}



textArea.addEventListener('input', e => transformText(e.target.value));
