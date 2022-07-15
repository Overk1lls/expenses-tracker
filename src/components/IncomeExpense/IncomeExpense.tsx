import React from 'react';
import { useAppSelector } from '../../app/hooks';
import { getProperTransactionAmountDisplay } from '../../lib/utils';

export const IncomeExpense = () => {
  const transactions = useAppSelector((state) => state.transactions.items);

  const income = transactions.reduce((prev, cur) => prev + (cur.amount > 0 ? cur.amount : 0), 0);
  const expenses = transactions.reduce((prev, cur) => prev + (cur.amount < 0 ? cur.amount : 0), 0);

  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p className="money plus">{getProperTransactionAmountDisplay(income)}</p>
      </div>
      <div>
        <h4>Expenses</h4>
        <p className="money minus">{getProperTransactionAmountDisplay(expenses)}</p>
      </div>
    </div>
  );
};
