import { createSlice } from "@reduxjs/toolkit";

const initialCounterState = { countNum: 0, isCountNum: true };

const counterSlice = createSlice({
  name: 'counter',
  initialState: initialCounterState,
  reducers: {
    increaseByOne(state) {
      state.countNum++;
    },
    decreaseByOne(state) {
      state.countNum--;
    },
    increaseByFive(state, action) {
      state.countNum = state.countNum + action.payload;
    },
    toggle(state) {
      state.isCountNum = !state.isCountNum;
    }
  }
})

export const { increaseByOne, decreaseByOne, increaseByFive, toggle } = counterSlice.actions;
export default counterSlice;