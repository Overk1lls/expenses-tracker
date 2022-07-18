import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import { useAppDispatch } from '../../app/hooks';
import { addTransactionAsync, TransactionModel } from '../../reducers/transactions';

export const TransactionAdd = () => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);
  const dispatch = useAppDispatch();

  const addTransactionHandler = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (isNaN(amount)) {
      return;
    }
    const newTransaction: TransactionModel = {
      text,
      amount,
      id: uuid(),
    };
    dispatch(addTransactionAsync(newTransaction));

    setText('');
    setAmount(0);
  };

  return (
    <>
      <h3>New Transaction</h3>
      <form>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            id="text"
            placeholder="Comments"
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            type="number"
            id="amount"
            placeholder="Amount"
            onChange={(e) => setAmount(parseInt(e.target.value))}
          />
        </div>
        <button className="btn" onClick={(e) => addTransactionHandler(e)}>
          Add a Transaction
        </button>
      </form>
    </>
  );
};
