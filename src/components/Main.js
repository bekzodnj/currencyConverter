import { useState, useEffect } from 'react';
import { getExchangeRates } from '../api';
import { CurrencyCodePicker } from './CurrencyCodePicker';
import { AmountField } from './AmountField';
import { RatesTable } from './RatesTable';

import { useSelector } from 'react-redux';
import { getAmount, getCurrencyCode } from '../store/rates';

const supportedCurrencies = ['USD', 'EUR', 'JPY', 'CAD', 'GBP', 'HUF'];
export function Main() {
  const amount = useSelector(getAmount);
  const currencyCode = useSelector(getCurrencyCode);

  const [currencyData, setCurrencyData] = useState({ USD: 1.0 });

  useEffect(() => {
    getExchangeRates(currencyCode, supportedCurrencies).then((rates) => {
      setCurrencyData(rates);
    });
  }, [currencyCode]);

  const handleCurrencyChange = (e) => {
    setCurrencyCode(e.target.value);
  };

  const setAmount = () => {};
  const setCurrencyCode = () => {};

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  return (
    <>
      <section className='header'>
        <h1>Exchange Rates</h1>
        <CurrencyCodePicker
          supportedCurrencies={supportedCurrencies}
          currencyCode={currencyCode}
          onChange={handleCurrencyChange}
        />
      </section>
      <section>
        <AmountField amount={amount} onChange={handleAmountChange} />
      </section>
      <section>
        <RatesTable amount={amount} currencyData={currencyData} />
      </section>
    </>
  );
}
