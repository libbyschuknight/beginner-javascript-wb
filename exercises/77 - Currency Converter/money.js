const fromSelect = document.querySelector('[name="from_currency"]');
const fromInput = document.querySelector('[name="from_amount"]');
const toSelect = document.querySelector('[name="to_currency"]');
const toEl = document.querySelector('.to_amount');
const form = document.querySelector('.app form');
const endpoint = 'https://api.apilayer.com/exchangerates_data/latest';
const ratesByBase = {};

const currencies = {
  USD: 'United States Dollar',
  AUD: 'Australian Dollar',
  BGN: 'Bulgarian Lev',
  BRL: 'Brazilian Real',
  CAD: 'Canadian Dollar',
  CHF: 'Swiss Franc',
  CNY: 'Chinese Yuan',
  CZK: 'Czech Republic Koruna',
  DKK: 'Danish Krone',
  GBP: 'British Pound Sterling',
  HKD: 'Hong Kong Dollar',
  HRK: 'Croatian Kuna',
  HUF: 'Hungarian Forint',
  IDR: 'Indonesian Rupiah',
  ILS: 'Israeli New Sheqel',
  INR: 'Indian Rupee',
  JPY: 'Japanese Yen',
  KRW: 'South Korean Won',
  MXN: 'Mexican Peso',
  MYR: 'Malaysian Ringgit',
  NOK: 'Norwegian Krone',
  NZD: 'New Zealand Dollar',
  PHP: 'Philippine Peso',
  PLN: 'Polish Zloty',
  RON: 'Romanian Leu',
  RUB: 'Russian Ruble',
  SEK: 'Swedish Krona',
  SGD: 'Singapore Dollar',
  THB: 'Thai Baht',
  TRY: 'Turkish Lira',
  ZAR: 'South African Rand',
  EUR: 'Euro',
};

function generateOptions(options) {
  // return Object.entries(options).map((arr) => {
  //   console.log(arr);
  // });
  return Object.entries(options)
    .map(
      ([currencyCode, currencyName]) =>
        `<option value="${currencyCode}">${currencyCode} - ${currencyName}</option>`
    )
    .join('');
}

async function fetchRates(base = 'USD') {
  // // look at api docs and got this work with this
  // // https://apilayer.com/marketplace/exchangerates_data-api#documentation-tab
  // const requestOptions = {
  //   method: 'GET',
  //   redirect: 'follow',
  //   headers: {
  //     apikey: '04W8Hz8btlDOYnlOqDLhdDHuivrTGqc7',
  //   },
  // };

  // console.log(requestOptions);

  // const res = await fetch(`${endpoint}?base=${base}`, requestOptions)
  //   .then((response) => response.text())
  //   .then((result) => console.log('result', result))
  //   .catch((error) => console.log('error', error));

  // // end

  const res = await fetch(`${endpoint}?base=${base}`, {
    headers: {
      apikey: '04W8Hz8btlDOYnlOqDLhdDHuivrTGqc7',
    },
  });

  const rates = await res.json();
  return rates;
}

async function convert(amount, from, to) {
  // first check if we even have the rates to convert from that currency
  if (!ratesByBase[from]) {
    console.log(
      `oh no we dont have ${from} to convert to ${to}. So lets go get it!`
    );
    const rates = await fetchRates(from);
    // store them for next time
    ratesByBase[from] = rates;
  }
  // convert that amount that they passed it
  const rate = ratesByBase[from].rates[to];
  const convertedAmount = rate * amount;
  // console.log(`${amount} ${from} is ${convertedAmount} in ${to}`);
  return convertedAmount;
}

const optionsHTML = generateOptions(currencies); // run once, store in variable
// console.log(optionsHTML);
// populate the options elements
fromSelect.innerHTML = optionsHTML;
toSelect.innerHTML = optionsHTML;

function formatCurrency(amount, currency) {
  // console.log(amount, currency);
  return Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
  }).format(amount);
}

async function handleInput(e) {
  const rawAmount = await convert(
    fromInput.value,
    fromSelect.value,
    toSelect.value
  );

  toEl.textContent = formatCurrency(rawAmount, toSelect.value);
}

form.addEventListener('input', handleInput);
