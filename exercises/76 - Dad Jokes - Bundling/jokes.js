// if parecel doesn't work but it should - was in video, but video old
// "browserslist": ["last 1 chrome version"]

import { jokeButton } from './lib/elements.js';
import { handleClick } from './lib/handlers.js';

// options before creating a elements.js
// jokeButton.addEventListener('click', () => handleClick(loader));
// jokeButton.addEventListener('click', handleClick.bind(null, loader));
// jokeButton.addEventListener('click', () => {
//   handleClick(loader);
// });

jokeButton.addEventListener('click', handleClick);
