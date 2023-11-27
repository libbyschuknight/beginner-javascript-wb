const endpoint = 'https://api.apilayer.com/exchangerates_data/latest';
const ratesByBase = {};

export async function fetchRates(base = 'USD') {
  const res = await fetch(`${endpoint}?base=${base}`, {
    headers: {
      apikey: '04W8Hz8btlDOYnlOqDLhdDHuivrTGqc7',
    },
  });

  const rates = await res.json();
  return rates;
}

export async function convert(amount, from, to) {
  if (!ratesByBase[from]) {
    console.log(
      `oh no we dont have ${from} to convert to ${to}. So lets go get it!`
    );
    const rates = await fetchRates(from);
    ratesByBase[from] = rates;
  }
  const rate = ratesByBase[from].rates[to];
  const convertedAmount = rate * amount;
  return convertedAmount;
}
