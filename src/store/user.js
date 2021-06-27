const initialState = {
  name: 'Bekzod Norkuziev',
  loggedIn: false,
};
export function userReducer(state = initialState, action) {
  return state;
}

export const getName = (state) => state.user.name;
