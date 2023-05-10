import { TOGGLE } from "../action/actionType";

const initialState = false;

export const showReducer = (state = { show: initialState }, action) => {
  if (action.type === TOGGLE) {
    return {
      showCounter: !state.showCounter
    };
  } else {
    return state;
  }
};
