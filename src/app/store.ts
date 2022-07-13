import { configureStore } from '@reduxjs/toolkit';
import transactionsReducer from '../reducers/transactions';

export const store = configureStore({
  reducer: {
    transactions: transactionsReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
