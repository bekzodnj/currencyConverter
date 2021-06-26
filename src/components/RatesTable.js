export function RatesTable({ currencyData, amount }) {
  return (
    <table className='ExchangeRate-table'>
      <tbody>
        {Object.entries(currencyData).map(([code, rate]) => {
          const exchangeAmount = amount * rate || 0.0;
          return (
            <tr key={code}>
              <td>{code}</td>
              <td>
                {exchangeAmount.toFixed(2).toLocaleString('en', {
                  style: 'currency',
                  currency: code,
                })}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
