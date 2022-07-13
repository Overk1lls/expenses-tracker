import React, { FC } from 'react';
import { useAppDispatch } from '../../app/hooks';
import { getProperTransactionAmountDisplay } from '../../lib/utils';
import { deleteTransaction, TransactionState } from '../../reducers/transactions';

type TransactionProps = {
  transaction: TransactionState;
};

export const Transaction: FC<TransactionProps> = ({ transaction }) => {
  const dispatch = useAppDispatch();

  const className = transaction.amount < 0 ? 'minus' : 'plus';

  return (
    <li className={className}>
      {transaction.text} <span>{getProperTransactionAmountDisplay(transaction.amount)}</span>
      <button className="delete-btn" onClick={() => dispatch(deleteTransaction(transaction.id))}>
        x
      </button>
    </li>
  );
};
