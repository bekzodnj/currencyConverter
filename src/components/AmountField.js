import { useDispatch } from 'react-redux';
import { changeAmount } from '../store/rates';

export function AmountField({ amount }) {
  const dispatch = useDispatch();

  function onChange(e) {
    dispatch(changeAmount(e.target.value));
  }

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
