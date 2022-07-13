import React from 'react';
import { Balance, Header, IncomeExpense, TransactionAdd, TransactionList } from '../components';

export const MainPage = () => {
  return (
    <>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpense />
        <TransactionList />
        <TransactionAdd />
      </div>
    </>
  );
};
