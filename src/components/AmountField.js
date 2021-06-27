export function AmountField({ amount, onChange }) {
  return (
    <form className='ExchangeRate-form'>
      <input
        aria-label='Amount in base currency'
        type='number'
        value={amount}
        onChange={onChange}
        placeholder='0'
      />
    </form>
  );
}
