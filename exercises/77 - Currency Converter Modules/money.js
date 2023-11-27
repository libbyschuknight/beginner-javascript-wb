import currencies from './currencies.js';
import { generateOptions, formatCurrency } from './utils.js';

const fromSelect = document.querySelector('[name="from_currency"]');
const fromInput = document.querySelector('[name="from_amount"]');
const toSelect = document.querySelector('[name="to_currency"]');
const toEl = document.querySelector('.to_amount');
const form = document.querySelector('.app form');
const endpoint = 'https://api.apilayer.com/exchangerates_data/latest';
// const ratesByBase = {};

async function fetchRates(base = 'USD') {
  const res = await fetch(`${endpoint}?base=${base}`, {
    headers: {
      apikey: '04W8Hz8btlDOYnlOqDLhdDHuivrTGqc7',
    },
  });

  const rates = await res.json();
  return rates;
}

// async function convert(amount, from, to) {
//   if (!ratesByBase[from]) {
//     console.log(
//       `oh no we dont have ${from} to convert to ${to}. So lets go get it!`
//     );
//     const rates = await fetchRates(from);
//     ratesByBase[from] = rates;
//   }
//   const rate = ratesByBase[from].rates[to];
//   const convertedAmount = rate * amount;
//   return convertedAmount;
// }

const optionsHTML = generateOptions(currencies);
fromSelect.innerHTML = optionsHTML;
toSelect.innerHTML = optionsHTML;

async function handleInput(e) {
  const rawAmount = await convert(
    fromInput.value,
    fromSelect.value,
    toSelect.value
  );

  toEl.textContent = formatCurrency(rawAmount, toSelect.value);
}

form.addEventListener('input', handleInput);


// mod 79 - 2min20secs
