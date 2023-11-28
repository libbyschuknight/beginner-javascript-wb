import { fetchJoke } from './index.js';
import { randomItemFromArray } from './utils.js';
import buttonText from '../data/buttonText.js';
import { jokeButtonSpan, jokeHolder, loader } from './elements.js';

export async function handleClick() {
  const { joke } = await fetchJoke(loader);
  jokeHolder.textContent = joke;
  jokeButtonSpan.textContent = randomItemFromArray(
    buttonText,
    jokeButtonSpan.textContent
  );

  // fetchJoke().then((data) => {
  //   jokeHolder.textContent = data.joke;
  //   jokeButton.textContent = randomItemFromArray(buttonText, jokeButton.textContent);
  // });
}
