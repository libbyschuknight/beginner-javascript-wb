import wait from 'waait';
// https://ngneat.github.io/falso/
import { randEmail, randFullName } from '@ngneat/falso';

console.log(randEmail(), randFullName());

async function go() {
  console.log('going');
  await wait(200);
  console.log('ending');
}

go();
