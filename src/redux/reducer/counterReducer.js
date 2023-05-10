import { INCREASE_ONE, DECREASE_ONE, INCREASE_FIVE } from "../action/actionType";

const initialState = 0;

export const counterReducer = (state = { counter: initialState }, action) => {
  if (action.type === INCREASE_ONE) {
    return {
      counter: state.counter + 1
    };
  } else if (action.type === INCREASE_FIVE) {
    return {
      counter: state.counter + action.payload
    }
  } else if (action.type === DECREASE_ONE) {
    return {
      counter: state.counter - 1
    };
  } else {
    return state;
  }
};