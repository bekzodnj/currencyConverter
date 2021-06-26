import mockRates from './rates.json';

// sleep function simulates the network call
const sleep = (ms) => new Promise((res) => setTimeout(res, ms));

/*
    Mock fetch function 
    returns exchangeRates json object promise
*/

export async function fetch(url) {
  //e.g http://api.exchangeratesapi.io/latest?base=${base}&symbols=${symbols}
  // base = USD
  const [, searchParam] = url.split('?');
  const param = new URLSearchParams(searchParam);

  sleep(250);
  const base = param.get('base');
  const rates = mockRates[base];

  return {
    async json() {
      return {
        success: true,
        rates,
      };
    },
  };
}
