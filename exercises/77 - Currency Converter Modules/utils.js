
const ratesByBase = {};


function generateOptions(options) {
  return Object.entries(options)
    .map(
      ([currencyCode, currencyName]) =>
        `<option value="${currencyCode}">${currencyCode} - ${currencyName}</option>`
    )
    .join('');
}

function formatCurrency(amount, currency) {
  return Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
  }).format(amount);
}

async function convert(amount, from, to) {
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

export { generateOptions, formatCurrency };
