import React from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { Transaction } from './Transaction';
import { fetchTransactions } from '../../reducers/transactions';

export const TransactionList = () => {
  const { status, items: transactions } = useAppSelector((state) => state.transactions);
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchTransactions());
    }
  }, [status, dispatch]);

  return (
    <>
      {status === 'loading' && <h3 style={{ textAlign: 'center' }}>Data is loading...</h3>}
      {status === 'failed' && (
        <h3 style={{ textAlign: 'center' }}>An error occurred during loading the data</h3>
      )}
      {status === 'succeeded' && (
        <ul className="list">
          {transactions.map((transaction) => (
            <Transaction key={transaction.id} transaction={transaction} />
          ))}
        </ul>
      )}
    </>
  );
};
