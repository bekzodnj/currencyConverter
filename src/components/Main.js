import { useCallback, useState, useEffect } from 'react';
import { getExchangeRates } from '../api';
import { CurrencyCodePicker } from './CurrencyCodePicker';

const supportedCurrencies = ['USD', 'EUR', 'JPY', 'CAD', 'GBP', 'HUF'];
export function Main() {
  const [amount, setAmount] = useState('1.50');
  const [currencyCode, setCurrentCode] = useState('USD');
  const [currencyData, setCurrencyData] = useState({ USD: 1.0 });

  useEffect(() => {
    getExchangeRates(currencyCode, supportedCurrencies).then((rates) => {
      setCurrencyData(rates);
    });
  }, [currencyCode]);

  const handleCurrencyChange = (e) => {
    setCurrentCode(e.target.value);
  };

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  return (
    <>
      <section>
        <h1>Exchange Rates</h1>
        <CurrencyCodePicker
          supportedCurrencies={supportedCurrencies}
          currencyCode={currencyCode}
          onChange={handleCurrencyChange}
        />
      </section>
    </>
  );
}
