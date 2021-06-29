const initialState = {
  amount: '12.00',
  currencyCode: 'USD',
};
export function ratesReducer(state = initialState, action) {
  switch (action.type) {
    case 'amountChanged':
      return { ...state, amount: action.payload };
    case 'currencyCodeChanged':
      return { ...state, currencyCode: action.payload };
    default:
      return state;
  }
}

/*
  Selectors - getters
  Actions creators - setters
*/

// selectors
export const getAmount = (state) => state.rates.amount;
export const getCurrencyCode = (state) => state.rates.currencyCode;

// action creator
export const changeAmount = (amount) => ({
  type: 'amountChanged',
  payload: amount,
});

export const changeCurrencyCode = (code) => ({
  type: 'currencyCodeChanged',
  payload: code,
});
