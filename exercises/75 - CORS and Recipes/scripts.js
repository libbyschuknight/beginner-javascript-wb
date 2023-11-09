// The Recipe Puppy API used in the course is broken
// Please use this replacement API URL "https://recipes.beginnerjavascript.com/api"

// gitHub API
// const data = `{
//   "login": "libbyschuknight",
//   "id": 7097235,
//   "node_id": "MDQ6VXNlcjcwOTcyMzU=",
//   "avatar_url": "https://avatars.githubusercontent.com/u/7097235?v=4",
//   "gravatar_id": "",
//   "url": "https://api.github.com/users/libbyschuknight",
//   "html_url": "https://github.com/libbyschuknight",
//   "followers_url": "https://api.github.com/users/libbyschuknight/followers",
//   "following_url": "https://api.github.com/users/libbyschuknight/following{/other_user}",
//   "gists_url": "https://api.github.com/users/libbyschuknight/gists{/gist_id}",
//   "starred_url": "https://api.github.com/users/libbyschuknight/starred{/owner}{/repo}",
//   "subscriptions_url": "https://api.github.com/users/libbyschuknight/subscriptions",
//   "organizations_url": "https://api.github.com/users/libbyschuknight/orgs",
//   "repos_url": "https://api.github.com/users/libbyschuknight/repos",
//   "events_url": "https://api.github.com/users/libbyschuknight/events{/privacy}",
//   "received_events_url": "https://api.github.com/users/libbyschuknight/received_events",
//   "type": "User",
//   "site_admin": false,
//   "name": "Libby Schumacher-Knight",
//   "company": null,
//   "blog": "https://medium.com/@SchuKnight",
//   "location": "New Zealand",
//   "email": null,
//   "hireable": true,
//   "bio": "Developer. Ruby, Rails, HTML, CSS, JS, Vue",
//   "twitter_username": null,
//   "public_repos": 96,
//   "public_gists": 45,
//   "followers": 16,
//   "following": 23,
//   "created_at": "2014-03-29T00:14:29Z",
//   "updated_at": "2023-10-15T04:15:46Z"
// }`

// const dataObj = JSON.parse(data);

// npm start - in exercises/75%20-%20CORS%20and%20Recipes folder

const baseEndpoint = 'https://recipes.beginnerjavascript.com/api';
// const proxy = `https://cors-anywhere.herokuapp.com/`;
const form = document.querySelector('form.search');
const recipesGrid = document.querySelector('.recipes');

async function fetchRecipes(query) {
  // const res = await fetch(`${proxy}${baseEndpoint}?q=${query}`);
  const res = await fetch(`${baseEndpoint}?q=${query}`);
  const data = await res.json();
  return data;
}

function displayRecipes(recipes) {
  console.log('Creating HTML');
  const html = recipes.map(
    (recipe) => `<div class="recipe">
      <h2>${recipe.title}</h2>
      <p>${recipe.ingredients}</p>
         ${
           recipe.thumbnail &&
           `<img src="${recipe.thumbnail}" alt="${recipe.title}"/>`
         }
      <a href="${recipe.href}">View Recipe →</a>
      </div>`
  );
  recipesGrid.innerHTML = html.join('');
}

async function fetchAndDisplay(query) {
  // turn the form off
  form.submit.disabled = true;
  // submit the search
  const recipes = await fetchRecipes(query);
  console.log(recipes);
  form.submit.disabled = false;
  displayRecipes(recipes.results);
}

async function handleSubmit(event) {
  event.preventDefault();
  const el = event.currentTarget;
  console.log(el.query.value);
  fetchAndDisplay(el.query.value);
}

form.addEventListener('submit', handleSubmit);
// on page load run it with pizza
fetchAndDisplay('pizza');
