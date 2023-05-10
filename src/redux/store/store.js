import { configureStore } from '@reduxjs/toolkit';
import counterSlice from '../slice/counterSlice';
import authSlice from '../slice/authSlice';

const store = configureStore({
  reducer: {
    counterSlice: counterSlice.reducer,
    authSlice: authSlice.reducer
  }
});

export default store;