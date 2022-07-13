import React from 'react';
import { useAppSelector } from '../../app/hooks';
import { Transaction } from './Transaction';

export const TransactionList = () => {
  const transactions = useAppSelector((state) => state.transactions);

  return (
    <ul className="list">
      {transactions.map((transaction) => (
        <Transaction key={transaction.id} transaction={transaction} />
      ))}
    </ul>
  );
};
