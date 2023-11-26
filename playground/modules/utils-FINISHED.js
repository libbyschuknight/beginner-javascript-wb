const last = 'bos'; // scoped to this module / file
const middle = 'slam dunk';

export function returnHi(name) {
  return `hi ${name} ${last}`;
}
const first = 'wes';

// NAMED exports - we can have as many as we want
export { last, middle };

// DEFAULT exports - you can only have one
export default first;
