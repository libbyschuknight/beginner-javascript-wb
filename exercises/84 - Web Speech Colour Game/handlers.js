export function handleResult({ results }) {
  const words = results[results.length - 1][0].transcript;
  console.log(words);
}
