import { jokeButton } from './lib/elements.js';
import { handleClick } from './lib/handlers.js';

// options before creating a elements.js
// jokeButton.addEventListener('click', () => handleClick(loader));
// jokeButton.addEventListener('click', handleClick.bind(null, loader));
// jokeButton.addEventListener('click', () => {
//   handleClick(loader);
// });

jokeButton.addEventListener('click', handleClick);
