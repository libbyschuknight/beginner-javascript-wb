import wait from 'waait';
// https://ngneat.github.io/falso/
import { randEmail, randFullName, randSuperhero } from '@ngneat/falso';
// https://date-fns.org/
import { formatDistance, format } from 'date-fns';
// https://axios-http.com/
import axios from 'axios';
// https://lodash.com/
import { intersection, isEqual } from 'lodash';
// https://github.com/scopsy/await-to-js#readme
import to from 'await-to-js';

// waait
async function go() {
  console.log('going');
  await wait(200);
  console.log('ending');
}
// go();

// https://ngneat.github.io/falso/
// console.log(randEmail(), randFullName());
// console.log(randEmail({ length: 50 }))
// console.log(randSuperhero());
// console.log(randSuperhero({ company: 'Marvel' }));
// console.log(randSuperhero({ length: 10 }));

// date-fns
// const diff = formatDistance(
//   new Date(1986, 3, 4, 1110, 32, 0),
//   new Date(1986, 3, 4, 10, 32, 0),
//   { addSuffix: true }
// ); //= > 'in about 1 hour'
// console.log(diff);

// const diff = formatDistance(new Date(), new Date(2020, 3, 4, 10, 32, 0), {
//   addSuffix: true,
// }); //= > 'in about 1 hour'
// console.log(diff);
// console.log(new Date()); // now

// const date = format(new Date(), `LLLL 'the' do y`);
// console.log(date);

// axios
// async function getJoke() {
//   const res = await axios.get('https://icanhazdadjoke.com/', {
//     headers: {
//       Accept: 'application/json',
//     },
//   });
//   console.log(res);
//   console.log(res.data);
// }

// async function getJoke() {
//   const { data } = await axios.get('https://icanhazdadjoke.com/', {
//     headers: {
//       Accept: 'application/json',
//     },
//   });
//   console.log(data);
// }
// getJoke();

// https://lodash.com/
// const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const b = [5, 3, 8, 3, 7, 34, 534];
// const sameValues = intersection(a, b);
// console.log(sameValues);

// const person1 = { name: 'wes' };
// const person2 = { name: 'wes' };

// console.log(isEqual(person1, person2));

// https://github.com/scopsy/await-to-js#readme
function checkIfNameIsCool(firstName) {
  return new Promise((resolve, reject) => {
    if (firstName === 'Wes') {
      resolve('Cool name');
      return;
    }
    reject(new Error('Bad Name'));
  });
}

async function checkName() {
  const [err, successValue] = await to(checkIfNameIsCool('snickers'));
  if (err) {
    // deal with it
    console.log(err);
  } else {
    console.log(successValue);
  }
}

checkName();
