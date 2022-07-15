import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { addDoc, deleteDoc, doc, getDocs } from 'firebase/firestore';
import { transactionsRef } from '../app/firebase';

export interface TransactionModel {
  id: string;
  text: string;
  amount: number;
}

interface TransactionState {
  items: TransactionModel[];
  status: 'idle' | 'loading' | 'failed' | 'succeeded';
}

export const initialState: TransactionState = {
  items: [],
  status: 'idle',
};

export const transactionsSlice = createSlice({
  initialState,
  name: 'transactionsSlice',
  reducers: {
    addTransaction: (state, action: PayloadAction<TransactionModel>) => {
      state.items.push(action.payload);
    },
    deleteTransaction: (state, action: PayloadAction<string>) => {
      state.items.filter((transaction) => transaction.id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTransactions.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchTransactions.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = state.items.concat(action.payload);
      })
      .addCase(fetchTransactions.rejected, (state) => {
        state.status = 'failed';
      })
      .addCase(addTransactionAsync.fulfilled, (state, action) => {
        state.items.push(action.payload);
      });
  },
});

export const fetchTransactions = createAsyncThunk('transactions/fetchTransactions', async () => {
  const data = await getDocs(transactionsRef);
  return data.docs.map((item) => item.data());
});

export const addTransactionAsync = createAsyncThunk(
  'transactions/addTransactionAsync',
  async (transaction: TransactionModel) => {
    await addDoc(transactionsRef, { ...transaction });
    return transaction;
  }
);

// TODO: delete a document
export const deleteTransactionAsync = createAsyncThunk(
  'transactions/deleteTransactionAsync',
  async (id: string) => {
    // await deleteDoc(...);
  }
);

const { actions, reducer } = transactionsSlice;
export const { addTransaction, deleteTransaction } = actions;
export default reducer;
