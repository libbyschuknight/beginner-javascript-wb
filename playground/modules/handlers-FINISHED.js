// load on demand
export async function handleButtonClick() {
  const { localCurrency, default: currency } = await import('./currencies.js');
  console.log(localCurrency, currency);
}
