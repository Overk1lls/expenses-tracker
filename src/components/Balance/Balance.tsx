import React from 'react';
import { useAppSelector } from '../../app/hooks';
import { getProperTransactionAmountDisplay } from '../../lib/utils';

export const Balance = () => {
  const transactions = useAppSelector((state) => state.transactions);

  const balance = transactions.reduce((prev, cur) => prev + cur.amount, 0);

  return (
    <>
      <h4>Balance</h4>
      <h1>{balance < 0 ? getProperTransactionAmountDisplay(balance) : `$${balance}`}</h1>
    </>
  );
};
