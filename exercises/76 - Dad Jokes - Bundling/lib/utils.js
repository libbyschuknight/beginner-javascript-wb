export function randomItemFromArray(arr, not) {
  const item = arr[Math.floor(Math.random() * arr.length)];

  if (item === not) {
    // console.log('last');
    return randomItemFromArray(arr, not);
  }

  return item;
}
