import { fetch } from './util/fetch';
//const url = `http://api.exchangeratesapi.io/latest?base=${base}&symbols=${symbols}`;

export function getExchangeRates(base, supportedCurrencies) {
  const currencies = supportedCurrencies
    .filter((currency) => currency !== base)
    .join();

  const url = `http://api.exchangeratesapi.io/latest?base=${base}&symbols=${symbols}`;
  fetch(url)
    .then((res) => res.json())
    .then(handleAPIErrors);
}

function handleAPIErrors(res) {
  if (res.success) return res;
  console.error(`Server Error:`);
  return {
    rates: {
      USD: 1.0,
    },
  };
}
