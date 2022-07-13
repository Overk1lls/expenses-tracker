import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface TransactionState {
  id: string;
  text: string;
  amount: number;
}

export const initialState: TransactionState[] = [
  { id: '1', text: 'Flower', amount: -20 },
  { id: '2', text: 'Salary', amount: 300 },
  { id: '3', text: 'Book', amount: -10 },
  { id: '4', text: 'Camera', amount: 150 },
];

export const transactionsSlice = createSlice({
  initialState,
  name: 'transactions',
  reducers: {
    addTransaction: (state, action: PayloadAction<TransactionState>) => {
      state.push(action.payload);
    },
    deleteTransaction: (state, action: PayloadAction<string>) => {
      return state.filter((transaction) => transaction.id !== action.payload);
    },
  },
});

const { actions, reducer } = transactionsSlice;
export const { addTransaction, deleteTransaction } = actions;
export default reducer;
