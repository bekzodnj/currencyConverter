import { useCallback, useState, useEffect } from 'react';

const supportedCurrencies = ['USD', 'EUR', 'JPY', 'CAD', 'GBP', 'MXN'];
export function Main() {
  const [amount, setAmount] = useState('1.50');
  const [currencyCode, setCurrentCode] = useState('USD');
  const [currencyData, setCurrencyData] = useState({ USD: 1.0 });

  return (
    <>
      <section>
        <h1>Exchange Rates</h1>
      </section>
    </>
  );
}
